import Navbar from "../../components/layout/Navbar";
import React from "react";
import {Link} from "react-router-dom";
import Card from "../../components/cards/Card";
import Footer from "../../components/layout/Footer";
import FullNameInput from "../../components/inputs/FullNameInput";
import LoginInput from "../../components/inputs/LoginInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import ButtonAction from "../../components/buttons/ButtonAction";
import PhoneInput from "../../components/inputs/PhoneInput";
import ProfilePhoto from "../../components/profile/ProfilePhoto";

const StudProfilePage = () => {

    const navigation = [
        {
            name: <Link to="/student/divisions">Учебные подразделения</Link>,
            current: false,
        },
        {
            name: <Link to="/student/schedule">Расписание</Link>,
            current: false,
        },
    ];

    const footerElements = [
        <Link to="/student/divisions">Учебные подразделения</Link>,
        <Link to="/student/schedule">Расписание</Link>,
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/student/profile"/>
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <Card>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            Личная информация
                        </h2>
                    </div>

                    <form>
                        <div className="grid grid-cols-12 gap-4 sm:gap-6">
                            <ProfilePhoto/>
                            <FullNameInput/>
                            <LoginInput/>
                            <PasswordInput/>
                        </div>

                        <div className="mt-5 flex justify-end gap-x-2">
                            <ButtonAction buttonText="Сохранить"/>
                        </div>
                    </form>
                </Card>
            </div>
            <Footer elements={footerElements}/>
        </div>
    );
}

export default StudProfilePage;