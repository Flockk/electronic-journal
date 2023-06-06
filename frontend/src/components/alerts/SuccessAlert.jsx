import React, {useEffect, useState} from "react";

const SuccessAlert = ({title, message, onClose}) => {
    const [showAlert, setShowAlert] = useState(true);

    const handleCloseAlert = () => {
        setShowAlert(false);
        onClose();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        showAlert && (
            <div
                className="fixed bottom-4 left-4 z-50 max-w-sm w-full bg-green-50 border-l-4 border-green-500 rounded-md shadow-md">
                <div className="flex justify-between py-3">
                    <div className="flex">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 rounded-full text-green-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="self-center ml-3">
                            <span className="text-green-600 font-semibold">{title}</span>
                            <p className="text-green-600 mt-1">{message}</p>
                        </div>
                    </div>
                    <button className="self-start text-green-500" onClick={handleCloseAlert}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        )
    );
};


export default SuccessAlert;
