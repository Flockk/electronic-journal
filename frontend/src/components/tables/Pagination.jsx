import React from "react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

const Pagination = ({currentPage, setCurrentPage, totalItems}) => {
    const totalPages = Math.ceil(totalItems / 10);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const renderPages = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md ${
                        currentPage === i
                            ? "bg-blue-500 text-white"
                            : "dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
                    }`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="flex">
            {currentPage !== 1 && (
                <button
                    className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-800 dark:text-gray-600 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}
                    onClick={() => handlePageClick(currentPage - 1)}
                >
                    <BiChevronLeft className="w-5 h-5"/>
                </button>
            )}

            {renderPages()}

            {currentPage !== totalPages && (
                <button
                    className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-800 dark:text-gray-600 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}
                    onClick={() => handlePageClick(currentPage + 1)}
                >
                    <BiChevronRight className="w-5 h-5"/>
                </button>
            )}
        </div>
    );
};

export default Pagination;
