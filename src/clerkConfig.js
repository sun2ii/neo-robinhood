// src/clerkConfig.js
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import App from './App';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import PortfolioPage from './pages/PortfolioPage';
import JoinOrganizationPage from './pages/JoinOrganizationPage';

// Publishable Key
const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const clerkConfig = (
  <ClerkProvider publishableKey={publishableKey}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} /> {/* Add portfolio route */}
        <Route path="/join-organization" element={<JoinOrganizationPage />} />
      </Routes>
    </BrowserRouter>
  </ClerkProvider>
);

export default clerkConfig;