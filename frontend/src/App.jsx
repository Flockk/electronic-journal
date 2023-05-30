import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/LoginForm";
import {useState} from "react";
import DivisionPage from "./pages/DivisionPage";
import Register from "./components/RegisterForm";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('accessToken') !== null);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)}/>}/>
                    <Route path="/divisions" element={isLoggedIn ? <DivisionPage onLogout={handleLogout}/> :
                        <Login onLogin={() => setIsLoggedIn(true)}/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
