import React from 'react';
import Card from './Card';
import ProfilePhoto from "../profile/ProfilePhoto";
import FullNameInput from "../inputs/FullNameInput";
import LoginInput from "../inputs/LoginInput";
import PasswordInput from "../inputs/PasswordInput";
import PhoneInput from "../inputs/PhoneInput";
import DropdownRoleSelection from "../dropdowns/DropdownRoleSelection";

const CustomCard = ({
                        includeProfilePhoto,
                        includePhoneInput,
                        includeDropdownMenu,
                        title,
                        description,
                        saveButtonText
                    }) => {
    return (
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <Card>
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                </div>

                <form>
                    <div className="grid grid-cols-12 gap-4 sm:gap-6">
                        {includeProfilePhoto && <ProfilePhoto/>}
                        <FullNameInput/>
                        <LoginInput/>
                        <PasswordInput/>
                        {includePhoneInput && <PhoneInput/>}
                        {includeDropdownMenu && <DropdownRoleSelection/>}
                    </div>

                    <div className="mt-5 flex justify-end gap-x-2">
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                            {saveButtonText}
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default CustomCard;
