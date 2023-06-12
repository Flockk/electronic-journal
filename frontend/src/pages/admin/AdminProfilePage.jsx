import React from "react";
import {Link} from "react-router-dom";
import UserProfilePage from "../../components/profile/UserProfilePage";

const AdminProfilePage = () => {
    const navigation = [
        {
            name: <Link to="/admin/users">Управление пользователями</Link>,
            current: false,
        },
        {
            name: <Link to="/admin/groups">Управление группами</Link>,
            current: false,
        },
    ];

    const footerElements = [
        <Link to="/admin/users">Управление пользователями</Link>,
        <Link to="/admin/groups">Управление группами</Link>,
    ];

    return <UserProfilePage navigation={navigation} footerElements={footerElements}/>;
};

export default AdminProfilePage;
