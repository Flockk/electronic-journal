import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getCurrentStudent} from "../../services/studentService";
import {getStudentDisciplines} from "../../services/disciplineService";
import Navbar from "../../components/layout/Navbar";
import StackedLayout from "../../components/layout/StackedLayout";
import ListboxDropdown from "../../components/dropdowns/ListboxDropdown";
import Footer from "../../components/layout/Footer";
import SimpleTable from "../../components/tables/SimpleTable";
import {getGradesByStudentAndDiscipline} from "../../services/gradeService";

const StudGradesPage = () => {
    const [selectedDiscipline, setSelectedDiscipline] = useState(null);
    const [dropdownDisciplines, setDropdownDisciplines] = useState([]);
    const [grades, setGrades] = useState([]);

    const navigation = [
        {
            name: <Link to="/student/schedule">Расписание</Link>,
            current: false,
        },
        {
            name: <Link to="/student/homeworks">Домашние задания</Link>,
            current: false,
        },
        {name: "Оценки", href: "#", current: true},
    ];

    const footerElements = [
        <Link to="/student/schedule">Расписание</Link>,
        <Link to="/student/homeworks">Домашние задания</Link>,
        "Оценки",
    ];

    useEffect(() => {
        const fetchDisciplines = async () => {
            try {
                const currentStudent = await getCurrentStudent();
                const disciplines = await getStudentDisciplines(currentStudent.id);
                const formattedDisciplines = disciplines.map((discipline) => ({
                    id: discipline.id,
                    title: discipline.name,
                    ...discipline,
                }));
                setDropdownDisciplines(formattedDisciplines);
            } catch (error) {
                console.error("Не удалось загрузить дисциплины:", error);
            }
        };

        fetchDisciplines();
    }, []);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                if (selectedDiscipline) {
                    const currentStudent = await getCurrentStudent();
                    const fetchedGrades = await getGradesByStudentAndDiscipline(
                        selectedDiscipline.id,
                        currentStudent.id
                    );
                    setGrades(fetchedGrades);
                }
            } catch (error) {
                console.error("Не удалось загрузить оценки:", error);
            }
        };

        fetchGrades();
    }, [selectedDiscipline]);

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/student/profile"/>
            <StackedLayout
                title="Оценки"
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
                {selectedDiscipline && (
                    <SimpleTable
                        columns={["Дата", "Оценка"]}
                        data={grades}
                    />
                )}
            </StackedLayout>
            <Footer elements={footerElements}/>
        </div>
    );
};

export default StudGradesPage;
