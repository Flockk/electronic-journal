import Navbar from "../../components/layout/Navbar";
import React from "react";
import {Link} from "react-router-dom";
import ProfileCard from "../../components/cards/ProfileCard";
import Footer from "../../components/layout/Footer";

const AdminProfilePage = () => {

    const navigation = [
        {
            name: <Link to="/admin/register">Создание пользователей</Link>,
            current: false
        },
    ];

    return (
        <div className="mt-16">
            <Navbar navigation={navigation} profileLink="/admin/profile"/>
            <ProfileCard/>
            <Footer/>
        </div>
    );
}

export default AdminProfilePage;
