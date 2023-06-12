import React from "react";
import {Link} from "react-router-dom";
import UserProfilePage from "../../components/profile/UserProfilePage";


const ProfProfilePage = () => {
    const navigation = [
        {
            name: <Link to="/professor/homeworks">Домашние задания</Link>,
            current: false,
        },
        {
            name: <Link to="/professor/grades">Оценки</Link>,
            current: false,
        },
    ];

    const footerElements = [
        <Link to="/professor/homeworks">Домашние задания</Link>,
    ];

    return <UserProfilePage navigation={navigation} footerElements={footerElements}/>;
};

export default ProfProfilePage;
