// src/pages/SignInPage.js
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);

export default SignInPage;