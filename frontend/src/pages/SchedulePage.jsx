import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import StackedLayout from "../components/StackedLayout";
import SimpleTable from "../components/SimpleTable";

const SchedulePage = () => {
    const navigation = [
        {
            name: <Link to="/divisions">Учебные подразделения</Link>,
            current: false,
        },
        {name: "Оценки", href: "#", current: false},
        {name: "Расписание", href: "#", current: true},
        {
            name: <Link to="/homeworks">Домашнее задание</Link>,
            current: false,
        },
        {name: "Группа", href: "#", current: false},
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
        Суббота: [
        ],
    };

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation}/>
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
            <Footer/>
        </div>
    );
};

export default SchedulePage;
