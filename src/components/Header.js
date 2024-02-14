import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Event Right</h1>
      <div className="header-controls">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
        <div className="location-selector">
          <select>
            <option value="default">Select Location</option>
            <option value="location1">Pittsburgh</option>
            <option value="location2">Miami</option>
            <option value="location3">Atlanta</option>
            <option value="location4">Charlotte</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;