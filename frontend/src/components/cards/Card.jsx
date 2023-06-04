import React from 'react';

const Card = ({children}) => {
    return (
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {children}
            </div>
        </div>
    );
};

export default Card;
