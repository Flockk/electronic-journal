import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";

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
                                <section className="text-gray-600 body-font">
                                    <div className="relative container mx-auto flex flex-col">
                                        <div className="lg:w-4/6 mx-auto">
                                            <div className="flex flex-col sm:flex-row mt-10">
                                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                                    <div
                                                        className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                             strokeLinejoin="round" strokeWidth="2"
                                                             className="w-10 h-10" viewBox="0 0 24 24">
                                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="flex flex-col items-center text-center justify-center">
                                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Фамилия
                                                            Имя Отчество</h2>
                                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                                        <p className="text-base">Директор</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Электронная
                                                            почта</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">afmagsumova@kai.ru</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+7
                                                            (843) 231 03 98</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                                    <section className="bg-white dark:bg-gray-900">
                                                        <div className="container mx-auto">
                                                            <div>
                                                                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">ОБ
                                                                    ИНСТИТУТЕ</h1>
                                                            </div>

                                                            <div
                                                                className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">+7
                                                                        (843) 231 03 98</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Почта</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">iante@kai.ru</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Адрес</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">г.
                                                                        Казань, ул. Толстого, 15</p>
                                                                </div>
                                                                <p className="font-medium text-blue-500 dark:text-blue-400">Кафедры</p>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        }
                    />
                    <Section
                        id="second"
                        title="Институт автоматики и электронного приборостроения"
                        content={
                            <>
                                <section className="text-gray-600 body-font">
                                    <div className="relative container mx-auto flex flex-col">
                                        <div className="lg:w-4/6 mx-auto">
                                            <div className="flex flex-col sm:flex-row mt-10">
                                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                                    <div
                                                        className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                             strokeLinejoin="round" strokeWidth="2"
                                                             className="w-10 h-10" viewBox="0 0 24 24">
                                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="flex flex-col items-center text-center justify-center">
                                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Фамилия
                                                            Имя Отчество</h2>
                                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                                        <p className="text-base">Директор</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Электронная
                                                            почта</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">afmagsumova@kai.ru</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+7
                                                            (843) 231 03 98</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                                    <section className="bg-white dark:bg-gray-900">
                                                        <div className="container mx-auto">
                                                            <div>
                                                                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">ОБ
                                                                    ИНСТИТУТЕ</h1>
                                                            </div>

                                                            <div
                                                                className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">+7
                                                                        (843) 231 03 98</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Почта</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">iante@kai.ru</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Адрес</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">г.
                                                                        Казань, ул. Толстого, 15</p>
                                                                </div>
                                                                <p className="font-medium text-blue-500 dark:text-blue-400">Кафедры</p>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        }
                    />
                    <Section
                        id="third"
                        title="Институт компьютерных технологий и защиты информации"
                        content={
                            <>
                                <section className="text-gray-600 body-font">
                                    <div className="relative container mx-auto flex flex-col">
                                        <div className="lg:w-4/6 mx-auto">
                                            <div className="flex flex-col sm:flex-row mt-10">
                                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                                    <div
                                                        className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                             strokeLinejoin="round" strokeWidth="2"
                                                             className="w-10 h-10" viewBox="0 0 24 24">
                                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="flex flex-col items-center text-center justify-center">
                                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Фамилия
                                                            Имя Отчество</h2>
                                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                                        <p className="text-base">Директор</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Электронная
                                                            почта</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">afmagsumova@kai.ru</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+7
                                                            (843) 231 03 98</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                                    <section className="bg-white dark:bg-gray-900">
                                                        <div className="container mx-auto">
                                                            <div>
                                                                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">ОБ
                                                                    ИНСТИТУТЕ</h1>
                                                            </div>

                                                            <div
                                                                className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">+7
                                                                        (843) 231 03 98</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Почта</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">iante@kai.ru</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Адрес</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">г.
                                                                        Казань, ул. Толстого, 15</p>
                                                                </div>
                                                                <p className="font-medium text-blue-500 dark:text-blue-400">Кафедры</p>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        }
                    />
                    <Section
                        id="fourth"
                        title="Институт радиоэлектроники, фотоники и цифровых технологий"
                        content={
                            <>
                                <section className="text-gray-600 body-font">
                                    <div className="relative container mx-auto flex flex-col">
                                        <div className="lg:w-4/6 mx-auto">
                                            <div className="flex flex-col sm:flex-row mt-10">
                                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                                    <div
                                                        className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                             strokeLinejoin="round" strokeWidth="2"
                                                             className="w-10 h-10" viewBox="0 0 24 24">
                                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="flex flex-col items-center text-center justify-center">
                                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Фамилия
                                                            Имя Отчество</h2>
                                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                                        <p className="text-base">Директор</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Электронная
                                                            почта</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">afmagsumova@kai.ru</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+7
                                                            (843) 231 03 98</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                                    <section className="bg-white dark:bg-gray-900">
                                                        <div className="container mx-auto">
                                                            <div>
                                                                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">ОБ
                                                                    ИНСТИТУТЕ</h1>
                                                            </div>

                                                            <div
                                                                className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">+7
                                                                        (843) 231 03 98</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Почта</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">iante@kai.ru</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Адрес</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">г.
                                                                        Казань, ул. Толстого, 15</p>
                                                                </div>
                                                                <p className="font-medium text-blue-500 dark:text-blue-400">Кафедры</p>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        }
                    />
                    <Section
                        id="fifth"
                        title="Институт инженерной экономики и предпринимательства"
                        content={
                            <>
                                <section className="text-gray-600 body-font">
                                    <div className="relative container mx-auto flex flex-col">
                                        <div className="lg:w-4/6 mx-auto">
                                            <div className="flex flex-col sm:flex-row mt-10">
                                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                                    <div
                                                        className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                             strokeLinejoin="round" strokeWidth="2"
                                                             className="w-10 h-10" viewBox="0 0 24 24">
                                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="flex flex-col items-center text-center justify-center">
                                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Фамилия
                                                            Имя Отчество</h2>
                                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                                        <p className="text-base">Директор</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Электронная
                                                            почта</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">afmagsumova@kai.ru</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+7
                                                            (843) 231 03 98</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                                    <section className="bg-white dark:bg-gray-900">
                                                        <div className="container mx-auto">
                                                            <div>
                                                                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">ОБ
                                                                    ИНСТИТУТЕ</h1>
                                                            </div>

                                                            <div
                                                                className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">+7
                                                                        (843) 231 03 98</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Почта</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">iante@kai.ru</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Адрес</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">г.
                                                                        Казань, ул. Толстого, 15</p>
                                                                </div>
                                                                <p className="font-medium text-blue-500 dark:text-blue-400">Кафедры</p>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        }
                    />
                    <Section
                        id="sixth"
                        title="Физико-математический факультет"
                        content={
                            <>
                                <section className="text-gray-600 body-font">
                                    <div className="relative container mx-auto flex flex-col">
                                        <div className="lg:w-4/6 mx-auto">
                                            <div className="flex flex-col sm:flex-row mt-10">
                                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                                    <div
                                                        className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                             strokeLinejoin="round" strokeWidth="2"
                                                             className="w-10 h-10" viewBox="0 0 24 24">
                                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="flex flex-col items-center text-center justify-center">
                                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Фамилия
                                                            Имя Отчество</h2>
                                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                                        <p className="text-base">Директор</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Электронная
                                                            почта</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">afmagsumova@kai.ru</p>
                                                        <h2 className="mt-4 text-sm font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+7
                                                            (843) 231 03 98</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                                    <section className="bg-white dark:bg-gray-900">
                                                        <div className="container mx-auto">
                                                            <div>
                                                                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">ОБ
                                                                    ИНСТИТУТЕ</h1>
                                                            </div>

                                                            <div
                                                                className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Телефон</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">+7
                                                                        (843) 231 03 98</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Почта</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">iante@kai.ru</p>
                                                                </div>

                                                                <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                </span>

                                                                    <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Адрес</h2>
                                                                    <p className="mt-2 text-blue-500 dark:text-blue-400">г.
                                                                        Казань, ул. Толстого, 15</p>
                                                                </div>
                                                                <p className="font-medium text-blue-500 dark:text-blue-400">Кафедры</p>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default DivisionPage;