// src/clerkConfig.js
import { ClerkProvider, SignIn, SignUp, SignedIn, UserProfile } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import App from './App';
import PortfolioPage from './pages/PortfolioPage';
import MarketPage from './pages/MarketPage';
import JoinOrCreateOrganizationPage from './pages/JoinOrCreateOrganizationPage';
import CreateOrganizationPage from './pages/CreateOrganizationPage';
import ViewOrganizationPage from './pages/ViewOrganizationPage';

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
        <Route path="/market" element={<MarketPage />} />
        <Route path="/join-or-create-organization" element={<SignedIn><JoinOrCreateOrganizationPage /></SignedIn>} />
        <Route path="/create-organization" element={<SignedIn><CreateOrganizationPage /></SignedIn>} />
        <Route path="/view-organization" element={<SignedIn><ViewOrganizationPage /></SignedIn>} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </BrowserRouter>
  </ClerkProvider>
);


export default clerkConfig;