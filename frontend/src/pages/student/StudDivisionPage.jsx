import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../components/layout/Navbar';
import DivisionSidebar from '../../components/division/DivisionSidebar';
import Section from '../../components/section/Section';
import DivisionDescription from '../../components/division/DivisionDescription';
import Footer from "../../components/layout/Footer";

const StudDivisionPage = () => {
    const [divisions] = useState([]);

    const navigation = [
        {name: 'Учебные подразделения', href: '#', current: true},
        {
            name: <Link to="/student/schedule">Расписание</Link>,
            current: false,
        },
    ];

    const footerElements = [
        'Учебные подразделения',
        <Link to="/student/schedule">Расписание</Link>,
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/student/profile"/>
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
            <Footer elements={footerElements}/>
        </div>
    );
};

export default StudDivisionPage;
