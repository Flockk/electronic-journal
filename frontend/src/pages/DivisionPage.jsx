import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../components/layout/Navbar';
import DivisionSidebar from '../components/division/DivisionSidebar';
import Section from '../components/section/Section';
import DivisionDescription from '../components/division/DivisionDescription';
import {getAllDivisions} from '../services/divisionService';
import Footer from "../components/layout/Footer";

const DivisionPage = () => {
    const [divisions, setDivisions] = useState([]);

    useEffect(() => {
        const fetchDivisions = () => {
            getAllDivisions()
                .then((divisions) => {
                    setDivisions(divisions);
                })
        };

        fetchDivisions();
    }, []);

    const navigation = [
        {name: 'Учебные подразделения', href: '#', current: true},
        {name: 'Оценки', href: '#', current: false},
        {
            name: <Link to="/schedule">Расписание</Link>,
            current: false
        },
        {
            name: <Link to="/homeworks">Домашнее задание</Link>,
            current: false
        },
        {name: 'Группа', href: '#', current: false},
    ];

    return (
        <div className="dark:bg-slate-900">
            <Navbar navigation={navigation}/>
            <div className="max-w-[90rem] mx-auto mt-14 flex">
                <div>
                    <DivisionSidebar divisions={divisions}/>
                </div>
                <div className="flex-grow">
                    <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-[22rem]">
                        <div className="max-w-3xl mx-auto xl:max-w-none py-10">
                            {divisions.map((division) => (
                                <Section
                                    key={division.id}
                                    id={division.id}
                                    title={division.title}
                                    content={<DivisionDescription/>}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default DivisionPage;
