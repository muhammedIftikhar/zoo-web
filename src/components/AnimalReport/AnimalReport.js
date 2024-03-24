import React, { useState } from 'react';
import './AnimalReport.css'; // Import your unique CSS file for styling

function AnimalReport() {
  const [animalSpecies, setAnimalSpecies] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Here you can console log animalSpecies or send it to the backend
    console.log("Animal Species: ", animalSpecies);

    // You can also send animalSpecies to the backend for further processing
    // Example: sendDataToBackend(animalSpecies);


  };

  return (
    <div className="animal-report-container"> {/* Use a unique className */}
      <h2 className="animal-report-title">Zoo Animal Report</h2> {/* Unique className for title */}
      <form onSubmit={handleFormSubmit} className="animal-report-form"> {/* Unique className for form */}
        <label htmlFor="animalSpecies" className="animal-species-label">Animal Species:</label> {/* Unique className for label */}
        <input
          type="text"
          id="animalSpecies"
          value={animalSpecies}
          onChange={(event) => setAnimalSpecies(event.target.value)}
          required
          className="animal-species-input" // Unique className for input
        />
        <button type="submit" className="generate-report-button">Generate Report</button> {/* Unique className for button */}
      </form>
    </div>
  );
}

export default AnimalReport;
