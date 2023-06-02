import React from "react";
import logo from "../assets/images/logo.svg"

const Footer = () => {
    return (
        // <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <footer className="bg-white dark:bg-gray-900 mt-auto relative z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
                    <a href="#">
                        <img className="w-auto h-7" src={logo} alt=""/>
                    </a>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                        <a href="#"
                           className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                            Учебные подразделения
                        </a>

                        <a href="#"
                           className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                            Оценки
                        </a>

                        <a href="#"
                           className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                            Расписание
                        </a>
                        <a href="#"
                           className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                            Домашнее задание
                        </a>

                        <a href="#"
                           className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                            Группа
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Все права защищены 2023</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
