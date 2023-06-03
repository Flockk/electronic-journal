import React from 'react';

const ColoredBadge = ({role}) => {
    let badge;

    switch (role) {
        case 'PROFESSOR':
            badge = (
                <span
                    className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
          Профессор
        </span>
            );
            break;
        case 'STUDENT':
            badge = (
                <span
                    className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          Студент
        </span>
            );
            break;
        default:
            badge = (
                <span
                    className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
                    Администратор
                </span>
            );
            break;
    }

    return <div>{badge}</div>;
};

export default ColoredBadge;
