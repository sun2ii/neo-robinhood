// src/pages/CreateOrganizationPage.js
import React from 'react';
import { CreateOrganization } from '@clerk/clerk-react';


const CreateOrganizationPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create New Organization</h1>
        <CreateOrganization
          afterCreateOrganizationUrl="/view-organization"
          redirectUrl="/view-organization"
        />
      </div>
    </div>
  );
};

export default CreateOrganizationPage;