import React, {useState} from 'react';
import {login} from "../services/authService";
import {useLocation, useNavigate} from "react-router-dom";
import image from "../assets/images/start.png"
import useAuth from "../utils/useAuth";

const LoginPage = () => {
    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [loginData, setLoginData] = useState({
        login: '',
        password: '',
    });

    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginFailedError, setLoginFailedError] = useState('');

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValid = true;
        if (loginData.login.trim() === '') {
            setLoginError('Введите логин');
            isValid = false;
        } else {
            setLoginError('');
        }

        if (loginData.password.trim() === '') {
            setPasswordError('Введите пароль');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (!isValid) {
            return;
        }

        try {
            const response = await login(loginData);
            setAuth({response});
            console.log('Вы успешно вошли в систему', response);

            if (response.role === "ADMIN") {
                navigate("/admin/profile", {replace: true});
            } else if (response.role === "PROFESSOR") {
                navigate("/professor/profile", {replace: true});
            } else if (response.role === "STUDENT") {
                navigate("/student/profile", {replace: true});
            } else {
                navigate(from, {replace: true});
            }
        } catch (error) {
            setLoginFailedError('Неверный логин или пароль');
            console.error('Ошибка входа', error);

            setTimeout(() => {
                setLoginFailedError('');
            }, 3000);
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
                                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg ${loginError ? 'border-red-500' : ''}`}
                                placeholder="Введите логин"
                                value={loginData.login}
                                onChange={handleChange}
                                name="login"
                            />
                            {loginError && <p className="text-red-500">{loginError}</p>}
                        </div>
                        <div>
                            <label className="font-medium">
                                Пароль
                            </label>
                            <input
                                type="password"
                                required
                                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg ${passwordError ? 'border-red-500' : ''}`}
                                placeholder="Введите пароль"
                                value={loginData.password}
                                onChange={handleChange}
                                name="password"
                            />
                            {passwordError && <p className="text-red-500">{passwordError}</p>}
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-lg duration-150"
                            type="submit"
                        >
                            Войти
                        </button>
                        {loginFailedError && <p className="text-red-500">{loginFailedError}</p>}
                    </form>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
