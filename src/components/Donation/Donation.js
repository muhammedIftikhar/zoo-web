import React, { useState } from 'react';
import './Donation.css'

function Donation(){
  // State variables to store donation information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logging the donation information
    console.log('Donor Name:', name);
    console.log('Donor Email:', email);
    console.log('Donation Amount (USD):', amount);
    // Add backend logic here to save donation information
    // For example, you can make an API call to send this data to the server
    // After saving the data, you can show a success message or handle errors accordingly
  };

  return (
    <div className="App">
      <header className="Header">
        <h1>Donate to Our Zoo</h1>
      </header>
      <main className="Main">
        <p>
          Thank you for considering donating to our zoo! Your donations help us provide the best care for our animals
          and maintain our facilities. Thank you for your support!
        </p>
        <p>
          To make a donation, please fill out the form below:
        </p>
        <form className="DonationForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="amount">Amount (USD):</label>
          <input type="number" id="amount" name="amount" min="1" required value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
          <button type="submit">Donate</button>
        </form>
      </main>
      <footer className="Footer">
        <p>Thank you for supporting our zoo!</p>
      </footer>
    </div>
  );
}

export default Donation;
