import Navbar from "../../components/layout/Navbar";
import React from "react";
import {Link} from "react-router-dom";
import Card from "../../components/cards/Card";
import Footer from "../../components/layout/Footer";

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

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/student/profile"/>
            <Card title="Ваш  профиль"
                        description="Вы можете изменить настройки своего профиля"
                        saveButtonText="Сохранить"
            />
            <Footer/>
        </div>
    );
}

export default StudProfilePage;