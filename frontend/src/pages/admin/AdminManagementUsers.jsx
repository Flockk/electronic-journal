import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ManagementUsersTable from "../../components/tables/ManagementUsersTable";
import StackedLayout from "../../components/layout/StackedLayout";
import ButtonAdd from "../../components/buttons/AddButton";

const AdminManagementUsers = () => {

    const navigation = [
        {
            name: <Link to="#">Управление пользователями</Link>,
            current: true
        },
        {
            name: <Link to="/admin/groups">Управление группами</Link>,
            current: false
        },
    ];

    const footerElements = [
        <Link to="#">Управление пользователями</Link>,
        <Link to="/admin/groups">Управление группами</Link>
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/admin/profile"/>
            <StackedLayout title="Управление пользователями" buttons={
                <>
                    <Link to="create">
                        <ButtonAdd buttonText="Добавить пользователя"/>
                    </Link>
                </>
            }>
                <ManagementUsersTable/>
            </StackedLayout>
            <Footer elements={footerElements}/>
        </div>
    );
}

export default AdminManagementUsers;
