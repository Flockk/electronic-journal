import React, {useState} from "react";
import Table from "../components/Table";
import Navbar from "../components/Navbar";
import StackedLayout from "../components/StackedLayout";
import DropdownListbox from "../components/DropdownListbox";

const HomeworkPage = () => {
    const navigation = [
        { name: 'Учебные подразделения', href: '/divisions', current: false },
        { name: 'Оценки', href: '#', current: false },
        { name: 'Расписание', href: '#', current: false },
        { name: 'Домашнее задание', href: '#', current: true },
        { name: 'Группа', href: '#', current: false },
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
    ]);

    const columns = [
        {label: "Дата", field: "date"},
        {label: "Тема занятия", field: "theme", placeholder: "Введите тему занятия"},
        {label: "Домашнее задание", field: "homework", placeholder: "Введите домашнее задание"},
    ];

    return (
        <div className="mt-16">
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
                <Table tableItems={tableItems} setTableItemsProp={setTableItems} columns={columns}/>
            </StackedLayout>
        </div>
    );
};

export default HomeworkPage;
