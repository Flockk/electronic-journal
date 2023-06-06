import React from 'react';
import {useNavigate} from 'react-router-dom';
import image from "../assets/images/404.svg";
import BackButton from "../components/buttons/BackButton";

const MissingPage = () => {
    const navigate = useNavigate();

    const goProfile = () => {
        const role = localStorage.getItem("role");

        if (role === "ADMIN") {
            navigate("/admin/profile");
        } else if (role === "PROFESSOR") {
            navigate("/professor/profile");
        } else if (role === "STUDENT") {
            navigate("/student/profile");
        } else {
            navigate("/");
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">Ошибка 404</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Нет такой
                        страницы</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Извините, страница, которую вы ищете, не
                        существует. Вот несколько полезных ссылок:</p>
                    <div className="flex items-center mt-6 gap-x-3">
                        <BackButton/>

                        <button
                            className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                            onClick={goProfile}
                        >
                            Профиль
                        </button>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src={image} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default MissingPage;
