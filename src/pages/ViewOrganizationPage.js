// src/pages/ViewOrganizationPage.js
import React from 'react';
import { OrganizationProfile, useOrganization } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css'; // Optional for styling

const ViewOrganizationPage = () => {
  const { organization } = useOrganization();
  const navigate = useNavigate();

  if (!organization) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h1>No Active Organization</h1>
          <p>You need to join or create an organization first.</p>
          <button className="nav-button" onClick={() => navigate('/join-or-create-organization')}>Go to Organization Page</button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
        <div>
          <OrganizationProfile />
        </div>
    </div>
  );
};

export default ViewOrganizationPage;