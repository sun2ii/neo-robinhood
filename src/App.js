// src/App.js
import React from 'react';
import { useClerk, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import './styles/App.css';

const App = () => {
  const { signOut } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <div className="app-container">
      <h1>Welcome to Robinhood</h1>
      <nav className="nav-bar">
        {!isSignedIn && (
          <>
            <Link className="nav-link" to="/sign-in">Sign In</Link>
            <Link className="nav-link" to="/sign-up">Sign Up</Link>
          </>
        )}
        {isSignedIn && (
          <>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/market">Market</Link>
            <Link className="nav-link" to="/join-or-create-organization">Organizations</Link>
            <button className="nav-button" onClick={signOut}>Log Out</button>
          </>
        )}
      </nav>
      {/* Add your main application components here */}
    </div>
  );
};

export default App;