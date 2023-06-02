import React, {useState} from "react";
import FillingTable from "../components/FillingTable";
import Navbar from "../components/Navbar";
import StackedLayout from "../components/StackedLayout";
import DropdownListbox from "../components/DropdownListbox";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

const HomeworkPage = () => {
    const navigation = [
        {
            name: <Link to="/divisions">Учебные подразделения</Link>,
            current: false
        },
        {name: 'Оценки', href: '#', current: false},
        {
            name: <Link to="/schedule">Расписание</Link>,
            current: false
        },
        {name: 'Домашнее задание', href: '#', current: true},
        {name: 'Группа', href: '#', current: false},
    ];

    const dropdownGroups = [
        {name: '4310'},
        {name: '4311'},
        {name: '4312'},
        {name: '4317'},
        {name: '4318'},
    ];

    const dropdownDisciplines = [
        {name: 'Дисциплина 1'},
        {name: 'Дисциплина 2'},
        {name: 'Дисциплина 3'},
        {name: 'Дисциплина 4'},
        {name: 'Дисциплина 5'},
    ];

    const [tableItems, setTableItems] = useState([
        {
            date: "01.09",
            theme: "",
            homework: "",
        },
        {
            date: "07.09",
            theme: "",
            homework: "",
        },
        {
            date: "14.09",
            theme: "",
            homework: "",
        },
        {
            date: "21.09",
            theme: "",
            homework: "",
        },
        {
            date: "28.09",
            theme: "",
            homework: "",
        },
        {
            date: "28.09",
            theme: "",
            homework: "",
        },
    ]);

    const columns = [
        {label: "Дата", field: "date"},
        {label: "Тема занятия", field: "theme", placeholder: "Введите тему занятия"},
        {label: "Домашнее задание", field: "homework", placeholder: "Введите домашнее задание"},
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation}/>
            <StackedLayout
                title="Домашние задания"
                buttons={
                    <>
                        <DropdownListbox options={dropdownGroups} defaultValue={dropdownGroups[0]}/>
                        <DropdownListbox options={dropdownDisciplines} defaultValue={dropdownDisciplines[0]}/>
                    </>
                }
            >
                <FillingTable tableItems={tableItems} setTableItemsProp={setTableItems} columns={columns}/>
            </StackedLayout>
            <Footer/>
        </div>
    );
};

export default HomeworkPage;
