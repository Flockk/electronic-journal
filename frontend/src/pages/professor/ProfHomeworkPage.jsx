import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import FillingTable from '../../components/tables/FillingTable';
import Navbar from '../../components/layout/Navbar';
import StackedLayout from '../../components/layout/StackedLayout';
import ListboxDropdown from '../../components/dropdowns/ListboxDropdown';
import Footer from '../../components/layout/Footer';
import {
    getCurrentProfessor,
    getGroupsByProfessorId
} from "../../services/professorService";
import {getDisciplinesByProfessor} from "../../services/disciplineService";
import {getHomeworksByGroupDisciplineProfessor} from "../../services/homeworkService";
import formatDate from "../../utils/alternativeDateUtils";

const ProfHomeworkPage = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedDiscipline, setSelectedDiscipline] = useState(null);
    const [dropdownGroups, setDropdownGroups] = useState([]);
    const [dropdownDisciplines, setDropdownDisciplines] = useState([]);
    const [tableItems, setTableItems] = useState([]);

    const navigation = [
        {name: 'Домашние задания', href: '#', current: true},
        {
            name: <Link to="/professor/grades">Оценки</Link>,
            current: false,
        },
    ];

    const footerElements = [
        <Link to="#">Домашние задания</Link>,
        <Link to="/professor/grades">Оценки</Link>,
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
                console.error('Failed to fetch groups:', error);
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
                const currentProfessor = await getCurrentProfessor();
                const homeworks = await getHomeworksByGroupDisciplineProfessor(
                    selectedGroup ? selectedGroup.id : null,
                    selectedDiscipline ? selectedDiscipline.id : null,
                    currentProfessor.id
                );
                const formattedHomeworks = homeworks.map(homework => ({
                    id: homework.id,
                    lesson: {
                        id: homework.lesson.id
                    },
                    professor: {
                        id: homework.professor.id
                    },
                    date: formatDate(homework.lesson.date),
                    type: getTypeLabel(homework.lesson.lessonType),
                    theme: homework.lesson.topic,
                    homework: homework.description,
                }));

                console.log('Formatted Homeworks:', formattedHomeworks);

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
    }, [selectedGroup, selectedDiscipline]);

    const columns = [
        {label: "Дата", field: "date"},
        {label: "Тип", field: "type"},
        {label: "Тема занятия", field: "theme", placeholder: "Введите тему занятия"},
        {label: "Домашнее задание", field: "homework", placeholder: "Введите домашнее задание"},
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/professor/profile"/>
            <StackedLayout
                title="Домашние задания"
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

export default ProfHomeworkPage;
