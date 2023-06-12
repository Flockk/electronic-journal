import React from 'react';

const PhoneInput = ({phone, onPhoneChange}) => {
    return (
        <>
            <div className="col-span-3">
                <div className="inline-block">
                    <label htmlFor="af-account-phone"
                           className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                        Телефон
                    </label>
                    <span className="text-sm text-gray-400 dark:text-gray-600"> (Опционально)</span>
                </div>
            </div>
            <div className="col-span-9">
                <div className="sm:flex">
                    <input
                        id="af-account-phone"
                        type="text"
                        className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="+x (xxx) xxx-xx-xx"
                        value={phone}
                        onChange={(e) => onPhoneChange(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
};

export default PhoneInput;
