import Navbar from "../../components/layout/Navbar";
import React from "react";
import {Link} from "react-router-dom";
import CustomCard from "../../components/cards/CustomCard";
import Footer from "../../components/layout/Footer";

const AdminProfilePage = () => {

    const navigation = [
        {
            name: <Link to="/admin/users">Управление пользователями</Link>,
            current: false
        },
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/admin/profile"/>
            <CustomCard title="Ваш  профиль"
                        description="Вы можете изменить настройки своего профиля"
                        saveButtonText="Сохранить"
            />
            <Footer/>
        </div>
    );
}

export default AdminProfilePage;