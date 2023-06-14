import {Link} from "react-router-dom";
import React, {useState} from "react";
import Navbar from "../../components/layout/Navbar";
import Card from "../../components/cards/Card";
import ActionButton from "../../components/buttons/ActionButton";
import ButtonBack from "../../components/buttons/BackButton";
import SuccessAlert from "../../components/alerts/SuccessAlert";
import Footer from "../../components/layout/Footer";
import {createGroup} from "../../services/groupService";
import CustomInput from "../../components/inputs/CustomInput";
import formatDate from "../../utils/dateUtils";

const AdminGroupCreationPage = () => {
    const navigation = [
        {
            name: <Link to="/admin/users">Управление пользователями</Link>,
            current: true,
        },
        {
            name: <Link to="/admin/groups">Управление группами</Link>,
            current: false,
        },
    ];

    const footerElements = [
        <Link to="/admin/users">Управление пользователями</Link>,
        <Link to="/admin/groups">Управление группами</Link>,
    ];

    const [data, setData] = useState({
        title: "",
        foundation_date: "",
        end_date: "",
    });

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleCreate = async () => {
        try {
            const formattedData = {
                ...data,
                foundation_date: formatDate(data.foundation_date),
                end_date: formatDate(data.end_date),
            };
            console.log(formattedData);
            await createGroup(formattedData);
            setShowSuccessAlert(true);
        } catch (error) {
            // Обработка ошибок
        }
    };

    const handleAlertClose = () => {
        setShowSuccessAlert(false);
    };

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/admin/profile"/>
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <Card>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            Создание новой группы
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Заполните необходимую информацию для создания новой группы
                        </p>
                    </div>

                    <form>
                        <div className="grid grid-cols-12 gap-4 sm:gap-6">
                            <CustomInput
                                value={data.title}
                                onChange={(value) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        title: value,
                                    }))
                                }
                                label="Название"
                                placeholder="Введите название"
                                inputType="text"
                            />
                            <CustomInput
                                value={formatDate(data.foundation_date)}
                                onChange={(value) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        foundation_date: value,
                                    }))
                                }
                                label="Дата формирования"
                                placeholder="Введите дату формирования"
                                inputType="date"
                            />
                            <CustomInput
                                value={formatDate(data.end_date)}
                                onChange={(value) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        end_date: value,
                                    }))
                                }
                                label="Дата расформирования"
                                placeholder="Введите дату расформирования"
                                inputType="date"
                            />
                        </div>

                        <div className="mt-5 flex justify-end gap-x-2">
                            <ActionButton buttonText="Создать" onClick={handleCreate}/>
                            <ButtonBack/>
                        </div>
                    </form>
                </Card>
                {showSuccessAlert && (
                    <SuccessAlert
                        title="Успешно!"
                        message="Группа успешно создана"
                        onClose={handleAlertClose}
                    />
                )}
            </div>
            <Footer elements={footerElements}/>
        </div>
    );
};

export default AdminGroupCreationPage;
