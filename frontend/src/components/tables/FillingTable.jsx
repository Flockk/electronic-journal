import React, {useState} from "react";

const FillingTable = ({tableItems, setTableItemsProp, columns}) => {
    const [activeEditIndex, setActiveEditIndex] = useState(null);
    const [hoveredCell, setHoveredCell] = useState(null);

    const toggleEditMode = (rowIndex, field) => {
        if (activeEditIndex === `${rowIndex}-${field}`) {
            setActiveEditIndex(null);
        } else {
            setActiveEditIndex(`${rowIndex}-${field}`);
        }
    };

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
                        <tr key={idxRow} className="divide-x hover:bg-gray-100">
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
                                                    className="relative overflow-hidden rounded-md border border-gray-300 shadow-sm focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
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
                                                                onClick={() => toggleEditMode(idxRow, column.field)}
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
                                                className="cursor-pointer flex justify-center items-center h-full"
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
