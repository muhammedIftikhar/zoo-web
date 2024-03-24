// TicketBuy.js
//need to implement a better calendar
//need to implement a date of purchase so it can be implemented in TicketView
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TicketBuy.css';

function TicketBuy() {
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [seniorTickets, setSeniorTickets] = useState(0);
  const [infantTickets, setInfantTickets] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const adultPrice = 10;
  const childPrice = 7;
  const seniorPrice = 6;
  const infantPrice = 5;

  const handleAdultChange = (event) => {
    setAdultTickets(Number(event.target.value));
  };

  const handleChildChange = (event) => {
    setChildTickets(Number(event.target.value));
  };

  const handleSeniorChange = (event) => {
    setSeniorTickets(Number(event.target.value));
  };

  const handleInfantChange = (event) => {
    setInfantTickets(Number(event.target.value));
  };

  const totalCost = (adultTickets * adultPrice) + (childTickets * childPrice) + (seniorTickets * seniorPrice) + (infantTickets * infantPrice);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Adult Tickets:', adultTickets);
    console.log('Child Tickets:', childTickets);
    console.log('Senior Tickets:', seniorTickets);
    console.log('Infant Tickets:', infantTickets);
    console.log('Selected Date:', selectedDate);
    console.log('Total Cost:', totalCost);
  };

  return (
    <div className="ticket-buy-container">
      <h2>Buy Tickets</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Adult (Ages 13-64):</label>
          <input
            type="number"
            value={adultTickets}
            onChange={handleAdultChange}
          />
          <span>${adultPrice} each</span>
        </div>
        <div>
          <label>Child (Ages 3-12):</label>
          <input
            type="number"
            value={childTickets}
            onChange={handleChildChange}
          />
          <span>${childPrice} each</span>
        </div>
        <div>
          <label>Senior (65+):</label>
          <input
            type="number"
            value={seniorTickets}
            onChange={handleSeniorChange}
          />
          <span>${seniorPrice} each</span>
        </div>
        <div>
          <label>Infant (2 & Under):</label>
          <input
            type="number"
            value={infantTickets}
            onChange={handleInfantChange}
          />
          <span>${infantPrice} each</span>
        </div>
        <div>
          <label>When?</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <div>Total Cost: ${totalCost}</div>
        <button type="submit">Buy Tickets</button>
      </form>
    </div>
  );
}

export default TicketBuy;
