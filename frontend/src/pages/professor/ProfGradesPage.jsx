import React, {useEffect, useState} from 'react';
import {getGradesByGroupDisciplineAndProfessor, updateGrade} from "../../services/gradeService";
import {getStudentsByGroupId} from "../../services/studentService";
import Navbar from "../../components/layout/Navbar";
import StackedLayout from "../../components/layout/StackedLayout";
import Footer from "../../components/layout/Footer";
import {Link} from "react-router-dom";
import formatDate from "../../utils/alternativeDateUtils";
import {getCurrentProfessor, getGroupsByProfessorId} from "../../services/professorService";
import {getDisciplinesByProfessor} from "../../services/disciplineService";
import ListboxDropdown from "../../components/dropdowns/ListboxDropdown";

const StudentGrades = () => {
    const [students, setStudents] = useState([]);
    const [grades, setGrades] = useState([]);

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedDiscipline, setSelectedDiscipline] = useState(null);
    const [dropdownGroups, setDropdownGroups] = useState([]);
    const [dropdownDisciplines, setDropdownDisciplines] = useState([]);

    const [editingCell, setEditingCell] = useState(null);
    const [editedValue, setEditedValue] = useState('');

    const navigation = [
        {
            name: <Link to="/professor/homeworks">Домашние задания</Link>,
            current: false,
        },
        {name: 'Оценки', href: '#', current: true},
    ];

    const footerElements = [
        <Link to="/professor/homeworks">Домашние задания</Link>,
        <Link to="#">Оценки</Link>,
    ];

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const currentProfessor = await getCurrentProfessor();
                const groups = await getGroupsByProfessorId(currentProfessor.id);
                const formattedGroups = groups.map(group => ({
                    id: group.id,
                    title: group.name,
                    ...group,
                }));
                setDropdownGroups(formattedGroups);
            } catch (error) {
                console.error('Не удалось загрузить группы:', error);
            }
        };

        fetchGroups();
    }, []);

    useEffect(() => {
        if (dropdownGroups.length > 0 && selectedGroup === null) {
            setSelectedGroup(dropdownGroups[0]);
        }
    }, [dropdownGroups, selectedGroup]);

    useEffect(() => {
        const fetchDisciplines = async () => {
            try {
                const currentProfessor = await getCurrentProfessor();
                const disciplines = await getDisciplinesByProfessor(currentProfessor.id);
                const formattedDisciplines = disciplines.map(discipline => ({
                    id: discipline.id,
                    title: discipline.name,
                    ...discipline,
                }));
                setDropdownDisciplines(formattedDisciplines);
            } catch (error) {
                console.error('Не удалось загрузить дисциплины:', error);
            }
        };

        fetchDisciplines();
    }, []);

    useEffect(() => {
        if (dropdownDisciplines.length > 0 && selectedDiscipline === null) {
            setSelectedDiscipline(dropdownDisciplines[0]);
        }
    }, [dropdownDisciplines, selectedDiscipline]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const studentsData = await getStudentsByGroupId(
                    selectedGroup ? selectedGroup.id : null,
                );
                setStudents(studentsData);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchGrades = async () => {
            try {
                const currentProfessor = await getCurrentProfessor();
                const gradesData = await getGradesByGroupDisciplineAndProfessor(
                    selectedGroup ? selectedGroup.id : null,
                    selectedDiscipline ? selectedDiscipline.id : null,
                    currentProfessor.id
                );

                setGrades(gradesData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStudents();
        fetchGrades();
    }, [selectedDiscipline, selectedGroup]);

    const renderTableData = () => {
        return students.map((student) => {
            const rowData = {
                name: `${student.user.lastname} ${student.user.firstname} ${student.user.patronymic}`,
            };

            grades.forEach((grade) => {
                if (grade.student.id === student.id) {
                    const date = formatDate(grade.lesson.date);
                    rowData[date] = grade.value;
                }
            });

            return rowData;
        });
    };

    const renderTableColumns = () => {
        const columns = ['ФИО'];

        grades.forEach((grade) => {
            const date = formatDate(grade.lesson.date);
            if (!columns.includes(date)) {
                columns.push(date);
            }
        });

        return columns;
    };

    const handleCellClick = (rowIndex, columnKey) => {
        const student = students[rowIndex];
        const grade = grades.find(grade => grade.student.id === student.id && formatDate(grade.lesson.date) === columnKey);
        const value = grade ? grade.value : '';

        setEditingCell({rowIndex, columnKey});
        setEditedValue(value);
    };

    const handleSaveGrade = async () => {
        try {
            const { rowIndex, columnKey } = editingCell;
            const student = students[rowIndex];
            const grade = grades.find(
                (grade) =>
                    grade.student.id === student.id &&
                    formatDate(grade.lesson.date) === columnKey
            );

            if (grade) {
                const updatedGrade = { ...grade, value: parseFloat(editedValue) };
                console.log("Обновлённая оценка:", updatedGrade);
                await updateGrade(grade.id, updatedGrade);
                setGrades((prevGrades) => {
                    const updatedGrades = [...prevGrades];
                    const gradeIndex = updatedGrades.findIndex((g) => g.id === grade.id);
                    updatedGrades[gradeIndex] = updatedGrade;
                    return updatedGrades;
                });
            }

            setEditingCell(null);
            setEditedValue('');
        } catch (error) {
            console.error(error);
        }
    };


    const handleCancelEdit = () => {
        setEditingCell(null);
        setEditedValue('');
    };

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/professor/profile"/>
            <StackedLayout
                title="Оценки"
                buttons={
                    <>
                        <ListboxDropdown
                            options={dropdownGroups}
                            value={selectedGroup}
                            onChange={(value) => setSelectedGroup(value)}
                        />
                        <ListboxDropdown
                            options={dropdownDisciplines}
                            value={selectedDiscipline}
                            onChange={(value) => setSelectedDiscipline(value)}
                        />
                    </>
                }
            >
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    {students.length > 0 ? (
                        <div className="shadow-sm border rounded-lg overflow-x-auto">
                            <table className="w-full table-auto text-sm text-left">
                                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                                <tr className="divide-x">
                                    {renderTableColumns().map((column, index) => (
                                        <th
                                            key={index}
                                            className="px-6 py-3 text-center"
                                            scope="col"
                                        >
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y">
                                {renderTableData().map((row, rowIndex) => (
                                    <tr key={rowIndex} className="hover:bg-gray-50">
                                        {Object.entries(row).map(([key, value], index) => {
                                            const isEditable =
                                                key !== 'ФИО' &&
                                                (!editingCell ||
                                                    (editingCell.rowIndex !== rowIndex &&
                                                        editingCell.columnKey !== key));

                                            return (
                                                <td
                                                    key={index}
                                                    className={`px-6 py-4 whitespace-nowrap ${
                                                        isEditable ? 'cursor-pointer' : ''
                                                    }`}
                                                    onClick={() => isEditable && handleCellClick(rowIndex, key)}
                                                >
                                                    {editingCell &&
                                                    editingCell.rowIndex === rowIndex &&
                                                    editingCell.columnKey === key ? (
                                                        <div className="flex items-center">
                                                            <input
                                                                type="number"
                                                                className="w-12 h-8 rounded-sm px-2 py-1 border focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                value={editedValue}
                                                                onChange={(e) => setEditedValue(e.target.value)}
                                                            />
                                                            <button
                                                                className="ml-2 px-2 py-1 bg-indigo-500 text-white rounded-sm"
                                                                onClick={handleSaveGrade}
                                                            >
                                                                Сохранить
                                                            </button>
                                                            <button
                                                                className="ml-2 px-2 py-1 bg-gray-300 text-gray-700 rounded-sm"
                                                                onClick={handleCancelEdit}
                                                            >
                                                                Отмена
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        value
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="w-full text-white bg-blue-500 rounded-lg">
                            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                                <div className="flex">
                                    <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                                        <path
                                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                                        </path>
                                    </svg>

                                    <p className="mx-3">Оценок нет</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </StackedLayout>
            <Footer elements={footerElements}/>
        </div>
    );
};

export default StudentGrades;
