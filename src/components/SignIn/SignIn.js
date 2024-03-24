// SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn({ handleSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignIn(email, password); // Call the function passed from App.js
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
      <div className="signup-link">
        <p>
          Not already a user? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
