import React from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { Navbar } from './Navbar';
import { UseProvider } from '../09-UseContext/context/UserProvider';

export const MainApp = () => {
  return (
    <UseProvider>
      <h1>Main App </h1>
      <Navbar />

      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UseProvider>
  );
};
