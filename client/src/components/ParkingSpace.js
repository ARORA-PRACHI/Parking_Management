import React from 'react';
import '../styles/ParkingSpace.css'; // Import the CSS file

const ParkingPage = () => {
  return (
    <div className="page-container">
      <h1 className="title">Parking Space</h1>

      {/* 2 Wheeler Parking */}
      <div className="parking-section">
        <h2 className="section-title">2 Wheeler Parking</h2>
        <div className="parking-grid">
          {Array(6)
            .fill('Available')
            .map((status, index) => (
              <div className="parking-spot" key={`2w-${index}`}>
                {status}
              </div>
            ))}
        </div>
      </div>

      {/* 3 Wheeler Parking */}
      <div className="parking-section">
        <h2 className="section-title">3 Wheeler Parking</h2>
        <div className="parking-grid">
          {Array(6)
            .fill('Available')
            .map((status, index) => (
              <div className="parking-spot" key={`3w-${index}`}>
                {status}
              </div>
            ))}
        </div>
      </div>

      {/* 4 Wheeler Parking */}
      <div className="parking-section">
        <h2 className="section-title">4 Wheeler Parking</h2>
        <div className="parking-grid">
          {Array(6)
            .fill('Available')
            .map((status, index) => (
              <div className="parking-spot" key={`4w-${index}`}>
                {status}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingPage;
