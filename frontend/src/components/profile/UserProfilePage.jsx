import {useEffect, useState} from "react";
import {getCurrentUser} from "../../services/userService";
import Navbar from "../layout/Navbar";
import Card from "../cards/Card";
import ProfilePhoto from "./ProfilePhoto";
import FullNameInput from "../inputs/FullNameInput";
import LoginInput from "../inputs/LoginInput";
import Footer from "../layout/Footer";
import ActionButton from "../buttons/ActionButton";
import {getCurrentProfessor} from "../../services/professorService";
import {getCurrentStudent} from "../../services/studentService";
import PhoneInput from "../inputs/PhoneInput";

const UserProfilePage = ({navigation, footerElements}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [lastname, setLastName] = useState("");
    const [firstname, setFirstName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [login, setLogin] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        const userRole = localStorage.getItem("role");
        setRole(userRole);
    }, []);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                let user;

                if (role === "ADMIN") {
                    user = await getCurrentUser();
                } else if (role === "PROFESSOR") {
                    const professor = await getCurrentProfessor();
                    user = {...professor};
                } else if (role === "STUDENT") {
                    const student = await getCurrentStudent();
                    user = {...student};
                }

                setCurrentUser(user);
                setLastName(user.lastname);
                setFirstName(user.firstname);
                setPatronymic(user.patronymic);
                setLogin(user.login);
                setPhone(user.phoneNumber);
            } catch (error) {
                console.log(error);
            }
        };

        if (role) {
            fetchCurrentUser();
        }
    }, [role]);

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
                            <LoginInput login={login} onLoginChange={setLogin}/>
                            {role === "PROFESSOR" || role === "STUDENT" ? (
                                <PhoneInput phone={phone} onPhoneChange={setPhone}/>
                            ) : null}
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
};

export default UserProfilePage;
