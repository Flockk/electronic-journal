const SimpleTable = ({dayOfWeek, columns, data}) => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div
                className="my-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']">
                {dayOfWeek}
            </div>
            {data.length > 0 ? (
                <div className="shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr className="divide-x">
                            {columns.map((column) => (
                                <th
                                    key={column}
                                    className="py-3 px-6 text-center whitespace-normal"
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                        {data.map((item, idx) => (
                            <tr key={idx} className="divide-x">
                                {Object.values(item).map((value, index) => (
                                    <td
                                        key={index}
                                        className="px-6 py-4 whitespace-normal text-center"
                                    >
                                        <div className="flex items-center justify-center">
                                            {value}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="w-full text-white bg-blue-500 rounded-lg">
                    <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                        <div className="flex">
                            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                                <path
                                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                                </path>
                            </svg>

                            <p className="mx-3">Занятий нет</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SimpleTable;
