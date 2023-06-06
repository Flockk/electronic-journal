import {Link} from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import StackedLayout from "../../components/layout/StackedLayout";
import ButtonAdd from "../../components/buttons/AddButton";
import Footer from "../../components/layout/Footer";
import React from "react";

const AdminManagementUsers = () => {

    const navigation = [
        {
            name: <Link to="/admin/users">Управление пользователями</Link>,
            current: false
        },
        {
            name: <Link to="#">Управление группами</Link>,
            current: true
        },
    ];

    const footerElements = [
        <Link to="/admin/users">Управление пользователями</Link>,
        <Link to="#">Управление группами</Link>
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/admin/profile"/>
            <StackedLayout title="Управление группами" buttons={
                <>
                    <Link to="create">
                        <ButtonAdd buttonText="Добавить группу"/>
                    </Link>
                </>
            }>
            </StackedLayout>
            <Footer elements={footerElements}/>
        </div>
    );
}

export default AdminManagementUsers;