import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';


export const MainApp = () => {
return (
    <UserProvider>
            <Navbar />
            <hr />

            <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                    {/* <Route path="*" element={<HomePage />} /> */}
            </Routes>
    </UserProvider>
)
}
