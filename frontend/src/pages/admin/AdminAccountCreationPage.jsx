import {Link} from "react-router-dom";
import React, {useState} from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FullNameInput from "../../components/inputs/FullNameInput";
import LoginInput from "../../components/inputs/LoginInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import DropdownRoleSelection from "../../components/dropdowns/DropdownRoleSelection";
import {register} from "../../services/authService";
import ButtonAction from "../../components/buttons/ButtonAction";
import ButtonBack from "../../components/buttons/ButtonBack";
import Card from "../../components/cards/Card";
import AlertSuccess from "../../components/alerts/AlertSuccess";

const AdminAccountCreationPage = () => {
    const navigation = [
        {
            name: <Link to="/admin/users">Управление пользователями</Link>,
            current: true,
        },
    ];

    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        patronymic: "",
        login: "",
        password: "",
        role: "",
    });

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleRegister = async () => {
        try {
            console.log(userData);
            await register(userData);
            setShowSuccessAlert(true); // Показать уведомление об успешном создании
        } catch (error) {
            // Обработка ошибок при регистрации
        }
    };

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/admin/profile"/>
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <Card>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            Создание нового пользователя
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Заполните необходимую информацию для создания нового пользователя
                        </p>
                    </div>

                    <form>
                        <div className="grid grid-cols-12 gap-4 sm:gap-6">
                            <FullNameInput
                                onFirstNameChange={(value) =>
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        firstname: value,
                                    }))
                                }
                                onLastNameChange={(value) =>
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        lastname: value,
                                    }))
                                }
                                onPatronymicChange={(value) =>
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        patronymic: value,
                                    }))
                                }
                            />
                            <LoginInput
                                onLoginChange={(value) =>
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        login: value,
                                    }))
                                }
                            />
                            <PasswordInput
                                onPasswordChange={(value) =>
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        password: value,
                                    }))
                                }
                            />
                            <DropdownRoleSelection
                                role={userData.role}
                                onRoleChange={(value) =>
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        role: value,
                                    }))
                                }
                            />
                        </div>

                        <div className="mt-5 flex justify-end gap-x-2">
                            <ButtonAction buttonText="Создать" onClick={handleRegister}/>
                            <ButtonBack/>
                        </div>
                    </form>
                </Card>
                {showSuccessAlert && (
                    <AlertSuccess
                        title="Успешно!"
                        message="Пользователь успешно создан."
                    />
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default AdminAccountCreationPage;
