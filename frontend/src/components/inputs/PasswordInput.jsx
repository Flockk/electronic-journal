import React from 'react';

const PasswordInput = () => {
    return (
        <>
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
        </>
    );
};

export default PasswordInput;
