import React from "react";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="header-top-button">
        Last Year You Said Next Year <p className="arrow">→</p>
      </div>
      <p className="header-content">
        Linear is a better way <br /> to build products
      </p>
      <p className="header-text">
        Meet the new standard for modern software development. <br />
        Streamline issues, sprints, and product roadmaps.
      </p>
    </div>
  );
};

export default MainHeader;
