import React, {useState} from 'react';
import {login} from "../services/authService";
import {useLocation, useNavigate} from "react-router-dom";
import image from "../assets/images/start.png"
import useAuth from "../utils/useAuth";

const LoginPage = () => {
    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/divisions";

    const [loginData, setLoginData] = useState({
        login: '',
        password: '',
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(loginData);
            setAuth({response});
            console.log('Logged in successfully', response);
            navigate(from, {replace: true});
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <main className="w-full flex">
            <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
                <img src={image} alt="Background" className="w-full h-full object-cover"/>
            </div>
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                    <div className="">
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Добро пожаловать!</h3>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Логин
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                placeholder="Введите логин"
                                value={loginData.login}
                                onChange={handleChange}
                                name="login"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Пароль
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                placeholder="Введите пароль"
                                value={loginData.password}
                                onChange={handleChange}
                                name="password"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            type="submit"
                        >
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
