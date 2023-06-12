import React from "react";
import {Link} from "react-router-dom";
import UserProfilePage from "../../components/profile/UserProfilePage";

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
        {
            name: <Link to="/student/homeworks">Домашние задания</Link>,
            current: false,
        },
    ];

    const footerElements = [
        <Link to="/student/divisions">Учебные подразделения</Link>,
        <Link to="/student/schedule">Расписание</Link>,
        <Link to="/student/homeworks">Домашние задания</Link>,
    ];

    return <UserProfilePage navigation={navigation} footerElements={footerElements}/>;
};

export default StudProfilePage;