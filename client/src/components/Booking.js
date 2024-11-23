import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Install react-calendar
import '../styles/Booking.css'; 

const Booking = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div id="booking-page">
      <div id="booking-header">
        <h2>Book Parking Space ,now!</h2>
        <p>Reserve your spot ahead of time and unlock hassle-free parking with exclusive perks!</p>
      </div>
      
      <div id="booking-content">
        <div id="calendar-container">
          <h3>Pick the Date</h3>
          <Calendar 
            onChange={handleDateChange} 
            value={date} 
            minDate={new Date()} // No booking for past dates
          />
          <p>Selected Date: {date.toDateString()}</p>
        </div>

        <div id="booking-benefits">
          <h3>Why Reserve Your Spot Early?</h3>
          <ul>
            <li>Secure Your Spot: Avoid last-minute hassle and park stress-free.</li>
            <li>Special Savings: Enjoy discounts of up to 20% on advance bookings.</li>
            <li>Fast-Track Entry: Breeze past the lines with priority access.</li>
            <li>Round-the-Clock Booking: Reserve your space anytime, day or night.</li>
          </ul>
        </div>

        <div id="booking-images">
          <h3>Experience Our Parking Spaces</h3>
          <div className="image-gallery">
            <img src="https://www.matrixcomsec.com/wp-content/uploads/2020/01/matrix-smart-parking-management-solution.png" alt="Parking Lot" />
          </div>
        </div>

        <div id="booking-form">
          <h3>Ready to Book?</h3>
          <p>Fill the form below</p>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" id="phone" name="phone" required />
            
            <button type="submit" className="submit-btn">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
