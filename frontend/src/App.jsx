import React from 'react';
import LoginForm from "./components/LoginForm";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <LoginForm/>
        </Router>
    );
}

export default App;