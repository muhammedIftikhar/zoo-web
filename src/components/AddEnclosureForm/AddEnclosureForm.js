import React, { useState } from 'react';
import './AddEnclosureForm.css';

const AddEnclosureForm = ({ onAddEnclosure }) => {
  const [name, setName] = useState('');
  const [enclosure_type, setType] = useState('');
  const [build_date, setBuildDate] = useState('');
  const [cleaning_start, setCleaningStart] = useState('');
  const [cleaning_end, setCleaningEnd] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !enclosure_type || !build_date || !cleaning_start || !cleaning_end) {
      alert('Please fill in all fields');
      return;
    }

    // Check if the build date is after the present date
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in 'yyyy-mm-dd' format
    if (build_date > currentDate) {
      alert('Build date cannot be after the present date');
      return;
    }

    // Store the form data in variables
    const enclosureData = {
      name,
      enclosure_type,
      build_date,
      cleaning_start,
      cleaning_end
    };

    // Backend logic should be done here to handle storing the data.
    // You can pass the enclosureData to any function or API call for further processing.

    // Logging variables
    console.log('Name:', name);
    console.log('Enclosure Type:', enclosure_type);
    console.log('Build Date:', build_date);
    console.log('Cleaning Start Time:', cleaning_start);
    console.log('Cleaning End Time:', cleaning_end);

    // Call the function passed from parent component to add enclosure
    // Reset form fields after submission
    handleReset();
  };

  // Function to reset form fields
  const handleReset = () => {
    setName('');
    setType('');
    setBuildDate('');
    setCleaningStart('');
    setCleaningEnd('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="enclosure-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="enclosure_type">Enclosure Type:</label>
        <input
          type="text"
          id="enclosure_type"
          placeholder="Enclosure Type"
          value={enclosure_type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="build_date">Build Date:</label>
        <input
          type="date"
          id="build_date"
          value={build_date}
          onChange={(e) => setBuildDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cleaning_start">Cleaning Start Time:</label>
        <input
          type="time"
          id="cleaning_start"
          value={cleaning_start}
          onChange={(e) => setCleaningStart(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cleaning_end">Cleaning End Time:</label>
        <input
          type="time"
          id="cleaning_end"
          value={cleaning_end}
          onChange={(e) => setCleaningEnd(e.target.value)}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit">Add Enclosure</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
};

export default AddEnclosureForm;
