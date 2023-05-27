import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import DivisionDescription from "../components/DivisionDescription";

const DivisionPage = () => {
    return (
        <div className="dark:bg-slate-900">
            <Navbar/>
            <div className="max-w-[90rem] mx-auto mt-14">
                <Sidebar/>
            </div>
            <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-[22rem]">
                <div className="max-w-3xl mx-auto xl:max-w-none py-10">
                    <Section
                        id="first"
                        title="Институт авиации, наземного транспорта и энергетики"
                        content={
                            <>
                                <DivisionDescription/>
                            </>
                        }
                    />
                    <Section
                        id="second"
                        title="Институт автоматики и электронного приборостроения"
                        content={
                            <>
                                <DivisionDescription/>
                            </>
                        }
                    />
                    <Section
                        id="third"
                        title="Институт компьютерных технологий и защиты информации"
                        content={
                            <DivisionDescription/>
                        }
                    />
                    <Section
                        id="fourth"
                        title="Институт радиоэлектроники, фотоники и цифровых технологий"
                        content={
                            <DivisionDescription/>
                        }
                    />
                    <Section
                        id="fifth"
                        title="Институт инженерной экономики и предпринимательства"
                        content={
                            <DivisionDescription/>
                        }
                    />
                    <Section
                        id="sixth"
                        title="Физико-математический факультет"
                        content={
                            <DivisionDescription/>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default DivisionPage;