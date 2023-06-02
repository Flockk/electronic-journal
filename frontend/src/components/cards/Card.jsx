import React from 'react';

const Card = ({children}) => {
    return (
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
            {children}
        </div>
    );
};

export default Card;
