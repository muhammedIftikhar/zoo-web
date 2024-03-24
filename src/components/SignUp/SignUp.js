// SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SignUp.css'; // Import SignUp.css for styling

function SignUp() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields after submission
    setName('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <div><Link to="/customer-profile">Customer Profile</Link></div>
      <div><Link to="/employee-profile">Employee Profile</Link></div>
      <div><Link to="/ticket-buy">Ticket Buy</Link></div>
      <div><Link to="/ticket-view">Ticket View</Link></div>
      <div><Link to="/donation">Donation</Link></div>
      <div className="signin-link">
        <p>Already have an account? <Link to="/sign-in">Sign in</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
