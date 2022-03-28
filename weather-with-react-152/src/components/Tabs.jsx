import React from "react";

const Tabs = ({ setCurrentPage }) => {
  const handleClick = (e) => {
    setCurrentPage(e.target.innerText);
  };
  return (
    <div className="tabs">
      <button className="tabs_item" onClick={handleClick}>
        Now
      </button>
      <button className="tabs_item" onClick={handleClick}>
        Details
      </button>
      <button className="tabs_item" onClick={handleClick}>
        Forecast
      </button>
    </div>
  );
};

export default Tabs;
