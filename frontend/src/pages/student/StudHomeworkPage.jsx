import React, {useEffect, useState} from "react";
import {getCurrentStudent, getCurrentStudentGroup} from "../../services/studentService";
import {
    getHomeworksByDisciplineStudentGroup,
} from "../../services/homeworkService";
import {Link} from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import StackedLayout from "../../components/layout/StackedLayout";
import Footer from "../../components/layout/Footer";
import {getStudentDisciplines} from "../../services/disciplineService";
import ListboxDropdown from "../../components/dropdowns/ListboxDropdown";
import formatDate from "../../utils/alternativeDateUtils";
import FillingTable from "../../components/tables/FillingTable";

const StudHomeworkPage = () => {
    const [selectedDiscipline, setSelectedDiscipline] = useState(null);
    const [dropdownDisciplines, setDropdownDisciplines] = useState([]);
    const [tableItems, setTableItems] = useState([]);

    const navigation = [
        {
            name: <Link to="/student/divisions">Учебные подразделения</Link>,
            current: false,
        },
        {
            name: <Link to="/student/schedule">Расписание</Link>,
            current: false,
        },
        {name: "Домашние задания", href: "#", current: true},
    ];

    const footerElements = [
        <Link to="/student/divisions">Учебные подразделения</Link>,
        <Link to="/student/schedule">Расписание</Link>,
        "Домашние задания",
    ];

    useEffect(() => {
        const fetchDisciplines = async () => {
            try {
                const currentStudent = await getCurrentStudent();
                const disciplines = await getStudentDisciplines(currentStudent.id);
                const formattedDisciplines = disciplines.map(discipline => ({
                    id: discipline.id,
                    title: discipline.name,
                    ...discipline,
                }));
                setDropdownDisciplines(formattedDisciplines);
            } catch (error) {
                console.error('Failed to fetch disciplines:', error);
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
        const fetchHomeworks = async () => {
            try {
                const currentGroup = await getCurrentStudentGroup();
                const currentStudent = await getCurrentStudent();
                const homeworks = await getHomeworksByDisciplineStudentGroup(
                    selectedDiscipline ? selectedDiscipline.id : null,
                    currentGroup.id,
                    currentStudent.id
                );
                const formattedHomeworks = homeworks.map(homework => ({
                    id: homework.id,
                    lsn_id: homework.lesson.id,
                    prof_id: homework.professor.id,
                    date: formatDate(homework.lesson.date),
                    type: getTypeLabel(homework.lesson.lessonType),
                    theme: homework.lesson.topic,
                    homework: homework.description,
                }));

                setTableItems(formattedHomeworks);
            } catch (error) {
                console.error('Не удалось загрузить домашние задания:', error);
            }
        };

        const getTypeLabel = (type) => {
            switch (type) {
                case "LECTURE":
                    return "Лекция";
                case "PRACTICAL":
                    return "Практическое занятие";
                case "LAB":
                    return "Лабораторная работа";
                default:
                    return type;
            }
        };

        fetchHomeworks();
    }, [selectedDiscipline]);

    const columns = [
        {label: "Дата", field: "date"},
        {label: "Тип", field: "type"},
        {label: "Тема занятия", field: "theme", placeholder: "Введите тему занятия"},
        {label: "Домашнее задание", field: "homework", placeholder: "Введите домашнее задание"},
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/student/profile"/>
            <StackedLayout
                title="Домашние задания"
                buttons={
                    <>
                        <ListboxDropdown
                            options={dropdownDisciplines}
                            value={selectedDiscipline}
                            onChange={(value) => setSelectedDiscipline(value)}
                        />
                    </>
                }
            >
                <FillingTable
                    tableItems={tableItems}
                    setTableItemsProp={setTableItems}
                    columns={columns}
                />
            </StackedLayout>
            <Footer elements={footerElements}/>
        </div>
    );
};

export default StudHomeworkPage;
