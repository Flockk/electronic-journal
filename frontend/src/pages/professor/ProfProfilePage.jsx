import Navbar from "../../components/layout/Navbar";
import React from "react";
import {Link} from "react-router-dom";
import ProfileCard from "../../components/cards/ProfileCard";
import Footer from "../../components/layout/Footer";

const ProfProfilePage = () => {

    const navigation = [
        {
            name: <Link to="/professor/homeworks">Домашние задания</Link>,
            current: false
        },
    ];

    return (
        <div className="mt-16">
            <Navbar navigation={navigation} profileLink="/professor/profile"/>
            <ProfileCard/>
            <Footer/>
        </div>
    );
}

export default ProfProfilePage;
