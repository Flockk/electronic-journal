import React, {useEffect, useRef, useState} from "react";
import {deleteUser} from "../../services/userService";

const ThreedotDropdown = ({id}) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);
    const panelRef = useRef(null);

    const toggle = () => {
        if (open) {
            close(buttonRef.current);
        } else {
            buttonRef.current.focus();
            setOpen(true);
        }
    };

    const close = (focusAfter) => {
        if (!open) return;

        setOpen(false);
        focusAfter && focusAfter.focus();

        buttonRef.current.blur();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target)) {
                close();
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const handleDelete = () => {
        deleteUser(id)
            .then(() => {
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="flex justify-center">
            <div className="relative inline-block">
                <button
                    ref={buttonRef}
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="dropdown-button"
                    type="button"
                    className="text-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                    </svg>
                </button>

                {open && (
                    <div
                        ref={panelRef}
                        id="dropdown-button"
                        className="absolute z-10 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg transform -translate-x-32 left-1/2"
                    >
                        <div className="p-1">
                            <a
                                href="#"
                                className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Просмотреть
                            </a>
                            <a
                                href="#"
                                className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Изменить
                            </a>
                            <a
                                href="#"
                                className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={handleDelete}
                            >
                                Удалить
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ThreedotDropdown;
