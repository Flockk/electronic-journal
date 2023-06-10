import Navbar from "../../components/layout/Navbar";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Card from "../../components/cards/Card";
import ProfilePhoto from "../../components/profile/ProfilePhoto";
import FullNameInput from "../../components/inputs/FullNameInput";
import LoginInput from "../../components/inputs/LoginInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import ActionButton from "../../components/buttons/ActionButton";
import {getCurrentUser} from "../../services/userService";

const ProfProfilePage = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [lastname, setLastName] = useState("");
    const [firstname, setFirstName] = useState("");
    const [patronymic, setPatronymic] = useState("");

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
                setLastName(user.lastname);
                setFirstName(user.firstname);
                setPatronymic(user.patronymic);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCurrentUser();
    }, []);

    const navigation = [
        {
            name: <Link to="/professor/homeworks">Домашние задания</Link>,
            current: false
        },
    ];

    const footerElements = [
        <Link to="/professor/homeworks">Домашние задания</Link>,
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/professor/profile"/>
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
                            <FullNameInput
                                lastName={lastname}
                                firstName={firstname}
                                patronymic={patronymic}
                                onLastNameChange={setLastName}
                                onFirstNameChange={setFirstName}
                                onPatronymicChange={setPatronymic}
                            />
                            <LoginInput/>
                            <PasswordInput/>
                        </div>

                        <div className="mt-5 flex justify-end gap-x-2">
                            <ActionButton buttonText="Сохранить"/>
                        </div>
                    </form>
                </Card>
            </div>
            <Footer elements={footerElements}/>
        </div>
    );
}

export default ProfProfilePage;
