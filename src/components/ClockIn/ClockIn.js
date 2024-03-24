import React, { useState } from 'react';
import axios from 'axios';
import './ClockIn.css';

function ClockIn() {
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [totalHoursWorked, setTotalHoursWorked] = useState(null);
  const [message, setMessage] = useState('');

  const handleClockIn = () => {
    const currentTime = new Date();
    setClockInTime(currentTime);
    setMessage('Clock-in successful');
    // Backend logic for clock-in time
    console.log('Clock In Time:', currentTime);
  };

  const handleClockOut = () => {
    const currentTime = new Date();
    setClockOutTime(currentTime);

    if (clockInTime) {
      const diff = Math.abs(currentTime - clockInTime);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const totalHours = hours + minutes / 60;
      setTotalHoursWorked(totalHours);
      setMessage('Clock-out successful');

      // Send both employeeId and totalHoursWorked to backend here
      sendClockOutDataToBackend(totalHours);
      
      // Backend logic for clock-out time
      console.log('Clock Out Time:', currentTime);
    } else {
      setMessage('Please clock in before clocking out');
    }
  };

  const sendClockOutDataToBackend = (hoursWorked) => {
    // Placeholder for sending clock out data to the backend
    // Replace the URL with your actual backend endpoint
    console.log('Hours worked',hoursWorked);
    axios.post('/clock-out', { hoursWorked })
      .then(response => {
        console.log('Clock out data sent to backend:', response.data);
      })
      .catch(error => {
        console.error('Error sending clock out data to backend:', error);
      });
  };

  return (
    <div className='clock-in'>
      <h1>Employee Clock In/Out</h1>
      <br></br>
      <div>
        <button onClick={handleClockIn}>Clock In</button>
        <button onClick={handleClockOut}>Clock Out</button>
      </div>
      <div>
        <p>Clock In Time: {clockInTime ? clockInTime.toLocaleString() : 'N/A'}</p>
        <p>Clock Out Time: {clockOutTime ? clockOutTime.toLocaleString() : 'N/A'}</p>
        <p>Total Hours Worked: {totalHoursWorked !== null ? totalHoursWorked.toFixed(2) + ' hours' : 'N/A'}</p>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ClockIn;
