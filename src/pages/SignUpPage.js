// src/pages/SignUpPage.js
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUp 
      path="/sign-up" 
      routing="path" 
      signInUrl="/sign-in" 
      afterSignUpUrl="/portfolio" // Redirect to portfolio page after sign-up
      afterSignInUrl="/portfolio"  // Redirect to portfolio page after sign-in
    />
  </div>
);

export default SignUpPage;