import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ProviderAuth} from "./utils/providerAuth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ProviderAuth>
                <Routes>
                    <Route path="/*" element={<App/>}/>
                </Routes>
            </ProviderAuth>
        </BrowserRouter>
    </React.StrictMode>
);
