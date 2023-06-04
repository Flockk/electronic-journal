import {Link} from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import React from "react";
import WithBtnTable from "../../components/tables/WithBtnTable";
import StackedLayout from "../../components/layout/StackedLayout";
import ButtonImport from "../../components/buttons/ButtonImport";
import ButtonAddUser from "../../components/buttons/ButtonAddUser";

const AdminManagementUsers = () => {

    const navigation = [
        {
            name: <Link to="#">Управление пользователями</Link>,
            current: true
        },
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/admin/profile"/>
            <StackedLayout title="Управление пользователями" buttons={
                <>
                    <ButtonImport buttonText="Экспорт" />
                    <ButtonAddUser buttonText="Добавить пользователя" />
                </>
            }>
                <WithBtnTable />
            </StackedLayout>
            <Footer/>
        </div>
    );
}

export default AdminManagementUsers;
