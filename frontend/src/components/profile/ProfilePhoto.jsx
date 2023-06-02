import React from 'react';
import image from "../../assets/images/user.svg";

const ProfilePhoto = () => {
    return (
        <>
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
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                    />
                                    <path
                                        d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
                                    />
                                </svg>
                                Загрузить фото
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePhoto;
