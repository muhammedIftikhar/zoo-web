import React, { useState } from 'react';
import './SecurityReport.css';

function SecurityReport() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [queryOption, setQueryOption] = useState('dates');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if EndDate is after present date
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in 'yyyy-mm-dd' format
    if (endDate > currentDate) {
      setErrorMessage('End date cannot be after the present date');
      return;
    }

    if (queryOption === 'dates' && startDate > endDate) {
      setErrorMessage('Start date cannot be after end date');
      return;
    }
    console.log('Query Option:', queryOption);
    if (queryOption === 'dates') {
      console.log('Start Date:', startDate);
      console.log('End Date:', endDate);
    } else if (queryOption === 'datesAndLocation') {
      console.log('Start Date:', startDate);
      console.log('End Date:', endDate);
      console.log('Location:', location);
    }
    // Implement backend logic here based on the selected query option
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setErrorMessage('');
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setErrorMessage('');
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleQueryOptionChange = (e) => {
    setQueryOption(e.target.value);
  };

  return (
    <div className="security-report-container">
      <h2 className="security-report-title">Security Report</h2>
      <form onSubmit={handleSubmit} className="security-report-form">
        <div className="security-form-group">
          <label htmlFor="queryOption" className="security-label">Query Option:</label>
          <select id="queryOption" value={queryOption} onChange={handleQueryOptionChange} className="security-select">
            <option value="dates">By Dates</option>
            <option value="datesAndLocation">By Dates and Location</option>
          </select>
        </div>
        <div className="security-form-group">
          <label htmlFor="startDate" className="security-label">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            required={queryOption !== 'location'}
            className="security-input"
          />
        </div>
        <div className="security-form-group">
          <label htmlFor="endDate" className="security-label">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            required={queryOption !== 'location'}
            className="security-input"
          />
        </div>
        {queryOption === 'datesAndLocation' && (
          <div className="security-form-group">
            <label htmlFor="location" className="security-label">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              className="security-input"
            />
          </div>
        )}
        <button type="submit" className="security-button">Generate Report</button>
        {errorMessage && <p className="security-error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default SecurityReport;
