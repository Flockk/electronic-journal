import Navbar from "../components/layout/Navbar";
import React from "react";
import {Link} from "react-router-dom";
import ProfileCard from "../components/cards/ProfileCard";
import Footer from "../components/layout/Footer";

const ProfilePage = () => {

    const navigation = [
        {
            name: <Link to="/divisions">Учебные подразделения</Link>,
            current: false
        },
        {name: 'Оценки', href: '#', current: false},
        {
            name: <Link to="/schedule">Расписание</Link>,
            current: false
        },
        {
            name: <Link to="/homeworks">Домашнее задание</Link>,
            current: false
        },
        {name: 'Группа', href: '#', current: false},
    ];

    return (
        <div className="mt-16">
            <Navbar navigation={navigation}/>
            <ProfileCard/>
            <Footer/>
        </div>
    );
}

export default ProfilePage;