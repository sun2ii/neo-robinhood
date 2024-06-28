// src/clerkConfig.js
import { ClerkProvider, SignedIn, SignIn, SignUp, UserProfile } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import App from './App';
import PortfolioPage from './pages/PortfolioPage';
import JoinOrganizationPage from './pages/JoinOrganizationPage';

// Publishable Key
const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const clerkConfig = (
  <ClerkProvider publishableKey={publishableKey}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in/*" element={<SignIn />} />
        <Route path="/sign-up/*" element={<SignUp />} />
        <Route path="/portfolio" element={<SignedIn><PortfolioPage /></SignedIn>} />
        <Route path="/join-organization" element={<JoinOrganizationPage />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </BrowserRouter>
  </ClerkProvider>
);

export default clerkConfig;