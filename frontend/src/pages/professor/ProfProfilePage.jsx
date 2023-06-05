import Navbar from "../../components/layout/Navbar";
import React from "react";
import {Link} from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Card from "../../components/cards/Card";

const ProfProfilePage = () => {

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
            <Card title="Ваш  профиль"
                  description="Вы можете изменить настройки своего профиля"
                  saveButtonText="Сохранить"
            />
            <Footer elements={footerElements}/>
        </div>
    );
}

export default ProfProfilePage;
