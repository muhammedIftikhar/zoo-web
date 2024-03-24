import React, { useState } from 'react';
import './DietForm.css';

function DietForm() {
  const [dietName, setDietName] = useState('');
  const [dietType, setDietType] = useState('');
  const [dietSchedule, setDietSchedule] = useState([]);
  const [scheduleInput, setScheduleInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Diet Name:', dietName);
    console.log('Diet Type:', dietType);
    console.log('Diet Schedule:', dietSchedule);

    setDietName('');
    setDietType('');
    setDietSchedule([]);
    setScheduleInput('');
  };

  const handleScheduleInputChange = (event) => {
    setScheduleInput(event.target.value);
  };

  const handleAddSchedule = () => {
    if (/^(0?[1-9]|1[0-2]):[0-5][0-9] [AP]M$/i.test(scheduleInput)) {
      setDietSchedule([...dietSchedule, scheduleInput]);
      setScheduleInput('');
    } else {
      alert('Please enter a valid time in format HH:MM AM/PM');
    }
  };

  return (
    <div className="diet-form-container">
      <h2>Diet Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dietName">Diet Name:</label>
          <input
            type="text"
            id="dietName"
            value={dietName}
            onChange={(e) => setDietName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dietType">Diet Type:</label>
          <input
            type="text"
            id="dietType"
            value={dietType}
            onChange={(e) => setDietType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dietSchedule">Diet Schedule:</label>
          <input
            type="text"
            id="dietSchedule"
            value={scheduleInput}
            onChange={handleScheduleInputChange}
            placeholder="Enter time in format HH:MM AM/PM"
          />
          <button type="button" onClick={handleAddSchedule}>Add Time</button>
        </div>
        <ul>
          {dietSchedule.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DietForm;
