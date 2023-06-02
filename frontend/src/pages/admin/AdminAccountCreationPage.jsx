import {Link} from "react-router-dom";
import React from "react";
import Navbar from "../../components/layout/Navbar";
import StackedLayout from "../../components/layout/StackedLayout";
import Footer from "../../components/layout/Footer";

const AdminAccountCreationPage = () => {
    const navigation = [
        {
            name: <Link to="/admin/register">Создание пользователей</Link>,
            current: true
        },
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/admin/profile"/>
            <StackedLayout></StackedLayout>
            <Footer/>
        </div>
    );
};

export default AdminAccountCreationPage;