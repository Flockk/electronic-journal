import Navbar from "../components/Navbar";
import React from "react";
import {Link} from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

const ProfilePage = () => {

    const navigation = [
        {
            name: <Link to="/divisions">Учебные подразделения</Link>,
            current: false
        },
        {name: 'Оценки', href: '#', current: false},
        {name: 'Расписание', href: '#', current: false},
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
        </div>
    );
}

export default ProfilePage;