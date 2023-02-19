import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar-major">
      <div className="navbar-main">
        <div className="logo-links">
          <div className="logo">Linear</div>
          <div className="links">
            <span className="nav-texts">Features</span>
            <span className="nav-texts">Method</span>
            <span className="nav-texts">Customers</span>
            <span className="nav-texts">Changelog</span>
            <span className="nav-texts">Integrations</span>
            <span className="nav-texts">Pricing</span>
            <span className="nav-texts">Company</span>
          </div>
        </div>
        <div className="login-btns">
          <div className="login-btn">
            <span className="nav-texts">Log in</span>
          </div>
          <div className="signup-btn">
            <span className="nav-texts">Sign up</span>
          </div>
        </div>
      </div>
      <div className="horizontal-div"></div>
    </div>
  );
};

export default Navigation;
