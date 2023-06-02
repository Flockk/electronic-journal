import Navbar from "../../components/layout/Navbar";
import React from "react";
import {Link} from "react-router-dom";
import ProfileCard from "../../components/cards/ProfileCard";
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
        <div className="mt-16">
            <Navbar navigation={navigation} profileLink="/student/profile"/>
            <ProfileCard/>
            <Footer/>
        </div>
    );
}

export default StudProfilePage;