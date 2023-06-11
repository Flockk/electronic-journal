import React, {useEffect, useState} from "react";
import FillingTable from "../../components/tables/FillingTable";
import Navbar from "../../components/layout/Navbar";
import StackedLayout from "../../components/layout/StackedLayout";
import ListboxDropdown from "../../components/dropdowns/ListboxDropdown";
import {Link} from "react-router-dom";
import Footer from "../../components/layout/Footer";
import {
    getCurrentProfessor,
    getGroupsByProfessorId,
    getHomeworksByProfessorId
} from "../../services/professorService";
import {getDisciplinesByProfessorId} from "../../services/disciplineService";
import formatDate from "../../utils/alternativeDateUtils";

const ProfHomeworkPage = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedDiscipline, setSelectedDiscipline] = useState(null);
    const [dropdownGroups, setDropdownGroups] = useState([]);
    const [dropdownDisciplines, setDropdownDisciplines] = useState([]);
    const [tableItems, setTableItems] = useState([]);

    const navigation = [
        {
            name: <Link to="/professor/homeworks">Домашние задания</Link>,
            current: false
        },
    ];

    const footerElements = [
        <Link to="/professor/homeworks">Домашние задания</Link>,
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const currentProfessor = await getCurrentProfessor();
                const groups = await getGroupsByProfessorId(currentProfessor.id);
                setDropdownGroups(groups);

                const disciplines = await getDisciplinesByProfessorId(currentProfessor.id);
                const formattedDisciplines = disciplines.map(discipline => ({
                    title: discipline.name,
                    ...discipline
                }));
                setDropdownDisciplines(formattedDisciplines);

                const homeworks = await getHomeworksByProfessorId(currentProfessor.id);
                const formattedHomeworks = homeworks.map((homework) => ({
                    date: formatDate(homework.lesson.date),
                    theme: homework.lesson.topic,
                    homework: homework.description
                }));

                setTableItems(formattedHomeworks);
            } catch (error) {
                console.error('Не удалось получить группы и дисциплины:', error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        {label: "Дата", field: "date"},
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
                            onChange={setSelectedGroup}
                        />
                        <ListboxDropdown
                            options={dropdownDisciplines}
                            value={selectedDiscipline}
                            onChange={setSelectedDiscipline}
                        />
                    </>
                }
            >
                <FillingTable tableItems={tableItems} setTableItemsProp={setTableItems} columns={columns}/>
            </StackedLayout>
            <Footer elements={footerElements}/>
        </div>
    );
};

export default ProfHomeworkPage;
