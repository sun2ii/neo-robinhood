// src/pages/JoinOrCreateOrganizationPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Auth.css";

const JoinOrCreateOrganizationPage = () => {
  const navigate = useNavigate();

  const handleCreateOrganization = () => {
    navigate('/create-organization');
  };

  const handleJoinOrganization = () => {
    navigate('/view-organization');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Join or Create Organization</h1>
        <button className="nav-button" onClick={handleCreateOrganization}>Create New Organization</button>
        <button className="nav-button" onClick={handleJoinOrganization}>Join Existing Organization</button>
      </div>
    </div>
  );
};

export default JoinOrCreateOrganizationPage;