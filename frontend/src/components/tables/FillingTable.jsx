import React, {useState} from "react";
import {updateLesson} from "../../services/lessonService";
import {updateHomework} from "../../services/homeworkService";

const FillingTable = ({tableItems, setTableItemsProp, columns}) => {
    const [activeEditIndex, setActiveEditIndex] = useState(null);
    const [hoveredCell, setHoveredCell] = useState(null);

    const toggleEditMode = (rowIndex, field) => {
        const userRole = localStorage.getItem("role");

        if (userRole === "STUDENT") {
            return;
        }

        if (activeEditIndex === `${rowIndex}-${field}`) {
            setActiveEditIndex(null);
        } else {
            setActiveEditIndex(`${rowIndex}-${field}`);
        }
    };

    const saveChanges = async (rowIndex, field, value) => {
        try {
            if (field === "theme") {
                const lessonId = tableItems[rowIndex].lesson.id;
                const updatedLesson = {...tableItems[rowIndex].lesson, topic: value};
                await updateLesson(lessonId, updatedLesson);
            } else if (field === "homework") {
                const homeworkId = tableItems[rowIndex]?.id;
                const lsn_id = tableItems[rowIndex]?.lesson?.id;
                const prof_id = tableItems[rowIndex]?.professor?.id;

                const updatedHomework = {
                    ...tableItems[rowIndex],
                    lsn_id: lsn_id,
                    prof_id: prof_id,
                    description: value,
                };

                console.log("tableItems:", tableItems);
                console.log("homeworkId:", homeworkId);

                await updateHomework(homeworkId, updatedHomework);
            }

            setActiveEditIndex(null);
        } catch (error) {
            console.error("Failed to save changes:", error);
        }
    };

    if (tableItems.length === 0) {
        return (
            <div className="w-full text-white bg-blue-500 rounded-lg">
                <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                    <div className="flex">
                        <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                            <path
                                d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                            ></path>
                        </svg>

                        <p className="mx-3">Домашних работ нет</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr className="divide-x">
                        {columns.map((column, idxColumn) => (
                            <th
                                key={idxColumn}
                                className={`py-3 px-6 ${
                                    idxColumn === 0 ? "w-[1%]" : ""
                                } text-center`}
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                    {tableItems.map((item, idxRow) => (
                        <tr key={idxRow} className="divide-x hover:bg-gray-100 text-center">
                            {columns.map((column, idxColumn) => (
                                <td
                                    key={idxColumn}
                                    className="px-6 py-4 whitespace-nowrap"
                                    onMouseEnter={() => setHoveredCell(`${idxRow}-${column.field}`)}
                                    onMouseLeave={() => setHoveredCell(null)}
                                >
                                    {column.field === "theme" || column.field === "homework" ? (
                                        activeEditIndex === `${idxRow}-${column.field}` ? (
                                            <div className="relative">
                                                <div
                                                    className="relative overflow-hidden rounded-md border border-gray-300 shadow-sm focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"
                                                >
                                                    <textarea
                                                        value={item[column.field]}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedTableItems = [...tableItems];
                                                            updatedTableItems[idxRow][column.field] = newValue;
                                                            setTableItemsProp(updatedTableItems);
                                                        }}
                                                        placeholder={column.placeholder}
                                                        className="block w-full border-0 focus:border-primary-500 focus:ring-0"
                                                    />
                                                    <div className="flex w-full items-center justify-end bg-white p-2">
                                                        <div className="flex space-x-1">
                                                            <button
                                                                className="px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
                                                                onClick={() => saveChanges(idxRow, column.field, item[column.field])}
                                                            >
                                                                Сохранить
                                                            </button>
                                                            <button
                                                                className="px-3 py-2 text-xs font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300"
                                                                onClick={() => toggleEditMode(idxRow, column.field)}
                                                            >
                                                                Отменить
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                onClick={() => toggleEditMode(idxRow, column.field)}
                                                className={`cursor-pointer flex justify-center items-center h-full}`}
                                            >
                                                <span>
                                                    {hoveredCell === `${idxRow}-${column.field}`
                                                        ? item[column.field] || "Заполнить"
                                                        : item[column.field]}

                                                </span>
                                            </div>
                                        )
                                    ) : (
                                        item[column.field]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FillingTable;
