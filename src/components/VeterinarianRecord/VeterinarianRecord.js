import React, { useState } from 'react';
import './VeterinarianRecord.css';

function VeterinarianRecord() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [medications, setMedications] = useState('');
  const [diagnosis, setDiagnosis] = useState(''); // Changed from treatments to diagnosis

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
      alert('Please enter valid positive numbers for weight and height.');
      return;
    }

    const medicationsArray = medications.split(',').filter((med) => med.trim() !== '');

    console.log('Weight:', weight);
    console.log('Height:', height);
    console.log('Medications:', medicationsArray);
    console.log('Diagnosis:', diagnosis); // Logging diagnosis

    setWeight('');
    setHeight('');
    setMedications('');
    setDiagnosis('');
  };

  return (
    <div className="veterinarian-records-container">
      <h2>Veterinarian Records</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="weight">Weight (lbs):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value)))}
            min="0"
            step="0.01"
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (in):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(Math.max(0, parseFloat(e.target.value)))}
            min="0"
            step="0.01"
          />
        </div>
        <div className="form-group">
          <label htmlFor="medications">Medications:</label>
          <textarea
            id="medications"
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
            placeholder="Enter medications separated by commas"
          />
        </div>
        <div className="form-group">
          <label htmlFor="diagnosis">Diagnosis:</label> {/* Changed from treatments to diagnosis */}
          <textarea
            id="diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            placeholder="Enter diagnosis"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VeterinarianRecord;
