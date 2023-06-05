import {Link} from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import React from "react";
import StackedLayout from "../../components/layout/StackedLayout";
import SimpleTable from "../../components/tables/SimpleTable";

const StudSchedulePage = () => {
    const navigation = [
        {
            name: <Link to="/student/divisions">Учебные подразделения</Link>,
            current: false,
        },
        {name: "Расписание", href: "#", current: true},
    ];

    const footerElements = [
        <Link to="/student/divisions">Учебные подразделения</Link>,
        "Расписание",
    ];

    const columns = [
        "Время",
        "Дата",
        "Дисциплина",
        "Вид занятия",
        "Аудитория",
        "Здание",
        "Преподаватель",
        "Кафедра",
    ];

    const scheduleData = {
        Понедельник: [
            {
                time: "08:00",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
            {
                time: "09:40",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
        ],
        Вторник: [
            {
                time: "08:00",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
            {
                time: "09:40",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
        ],
        Среда: [
            {
                time: "08:00",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
            {
                time: "09:40",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
        ],
        Четверг: [
            {
                time: "08:00",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
            {
                time: "09:40",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
        ],
        Пятница: [
            {
                time: "08:00",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
            {
                time: "09:40",
                date: "чет",
                discipline: "Вычислительная математика",
                lessonType: "лек",
                classroom: "403",
                building: "7",
                teacher: "Фамилия Имя Отчество",
                department: "Кафедра прикладной математики и информатики",
            },
        ],
        Суббота: [],
    };

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/student/profile"/>
            <StackedLayout title="Расписание">
                {Object.entries(scheduleData).map(([dayOfWeek, data]) => (
                    <div key={dayOfWeek} className="mb-8">
                        <SimpleTable
                            dayOfWeek={dayOfWeek}
                            columns={columns}
                            data={data}
                        />
                    </div>
                ))}
            </StackedLayout>
            <Footer elements={footerElements}/>
        </div>
    );
};

export default StudSchedulePage;
