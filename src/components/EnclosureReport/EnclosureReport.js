import React, { useState } from 'react';
import './EnclosureReport.css'; // Import your unique CSS file for styling

function EnclosureReport() {
  const [enclosureType, setEnclosureType] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Here you can console log enclosureType or send it to the backend
    console.log("Enclosure Type: ", enclosureType);

    // You can also send enclosureType to the backend for further processing
    // Example: sendDataToBackend(enclosureType);


  };

  return (
    <div className="enclosure-report-container"> {/* Use a unique className */}
      <h2 className="enclosure-report-title">Zoo Enclosure Report</h2> {/* Unique className for title */}
      <form onSubmit={handleFormSubmit} className="enclosure-report-form"> {/* Unique className for form */}
        <label htmlFor="enclosureType" className="enclosure-type-label">Enclosure Type:</label> {/* Unique className for label */}
        <input
          type="text"
          id="enclosureType"
          value={enclosureType}
          onChange={(event) => setEnclosureType(event.target.value)}
          required
          className="enclosure-type-input" // Unique className for input
        />
        <button type="submit" className="generate-report-button">Generate Report on Cleaning Schedules</button> {/* Unique className for button */}
      </form>
    </div>
  );
}

export default EnclosureReport;
