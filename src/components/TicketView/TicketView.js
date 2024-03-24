// TicketViewAndParentComponent.js
import React from 'react';
import './TicketView.css'

function TicketView({ tickets }) {
  return (
    <div className="ticket-view-container">
      <h2>Ticket Information</h2>
      {tickets.map((ticket, index) => (
        <div key={index} className="ticket-info">
          <p><strong>Ticket Type:</strong> {ticket.type}</p>
          <p><strong>Ticket Price:</strong> ${ticket.price}</p>
          <p><strong>Date of Scheduled Visit:</strong> {ticket.visitDate}</p>
        </div>
      ))}
    </div>
  );
}

function TicketViewAndParentComponent() {
  // Simulated ticket data,will need to use the backend to actually fetch the data from database later
  const tickets = [
    { type: 'Adult', price: 10, visitDate: '2024-04-01' },
    { type: 'Child', price: 7, visitDate: '2024-04-02' },
    { type: 'Senior', price: 6, visitDate: '2024-04-03' },
    // Add more ticket objects as needed
  ];

  return (
    <div>
      {/* Other components or content */}
      <TicketView tickets={tickets} />
    </div>
  );
}

export default TicketViewAndParentComponent;
