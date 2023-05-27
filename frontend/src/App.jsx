import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DivisionPage from './pages/DivisionPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="/divisions" element={<DivisionPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;