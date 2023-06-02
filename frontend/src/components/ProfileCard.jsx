import React from 'react';
import image from "../assets/images/user.svg";

const ProfileCard = () => {
    return (
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Профиль
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Вы можете изменить настройки своего профиля
                    </p>
                </div>

                <form>
                    <div className="grid grid-cols-12 gap-4 sm:gap-6">
                        <div className="col-span-3">
                            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Фото
                            </label>
                        </div>

                        <div className="col-span-9">
                            <div className="flex items-center gap-5">
                                <img
                                    className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                                    src={image}
                                    alt="Фото профиля"
                                />
                                <div className="flex gap-x-2">
                                    <div>
                                        <button
                                            type="button"
                                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                <path
                                                    d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg>
                                            Загрузить фото
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="af-account-full-name"
                                   className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Полное имя
                            </label>
                        </div>

                        <div className="col-span-9">
                            <div className="sm:flex">
                                <input
                                    id="af-account-full-name"
                                    type="text"
                                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    placeholder="Фамилия"
                                />
                                <input
                                    type="text"
                                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    placeholder="Имя"
                                />
                                <input
                                    type="text"
                                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    placeholder="Отчество"
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="af-account-login"
                                   className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Логин
                            </label>
                        </div>

                        <div className="col-span-9">
                            <input
                                id="af-account-login"
                                type="text"
                                className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="admin@login"
                            />
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="af-account-password"
                                   className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Пароль
                            </label>
                        </div>

                        <div className="col-span-9">
                            <div className="space-y-2">
                                <input
                                    id="af-account-password"
                                    type="text"
                                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    placeholder="Введите пароль"
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <div className="inline-block">
                                <label htmlFor="af-account-phone"
                                       className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                    Телефон
                                </label>
                                <span className="text-sm text-gray-400 dark:text-gray-600"> (Опционально)
          </span>
                            </div>
                        </div>

                        <div className="col-span-9">
                            <div className="sm:flex">
                                <input
                                    id="af-account-phone"
                                    type="text"
                                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    placeholder="+x(xxx)xxx-xx-xx"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-end gap-x-2">
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                            Сохранить
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileCard;
