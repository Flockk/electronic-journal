import {Link} from "react-router-dom";
import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CustomCard from "../../components/cards/CustomCard";
import FullNameInput from "../../components/inputs/FullNameInput";
import LoginInput from "../../components/inputs/LoginInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import DropdownRoleSelection from "../../components/dropdowns/DropdownRoleSelection";

const AdminAccountCreationPage = () => {
    const navigation = [
        {
            name: <Link to="/admin/register">Создание пользователя</Link>,
            current: true,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen mt-16">
            <Navbar navigation={navigation} profileLink="/admin/profile"/>
            <CustomCard
                includeProfilePhoto={false}
                includePhoneInput={false}
                includeDropdownMenu={true}
                title="Создание нового пользователя"
                description="Заполните необходимую информацию для создания нового пользователя"
                saveButtonText="Создать"
            >
                <FullNameInput/>
                <LoginInput/>
                <PasswordInput/>
                <DropdownRoleSelection/>
            </CustomCard>
            <Footer/>
        </div>
    );
};

export default AdminAccountCreationPage;
