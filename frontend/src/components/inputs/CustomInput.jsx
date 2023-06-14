const CustomInput = ({value, onChange, label, placeholder, inputType}) => {
    return (
        <>
            <div className="col-span-3">
                <label
                    htmlFor="custom-input"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                    {label}
                </label>
            </div>
            <div className="col-span-9">
                <input
                    id="custom-input"
                    type={inputType}
                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </>
    );
};

export default CustomInput;
