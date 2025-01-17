import React from "react";
import "../styles/UnderDevelopment.css";

const UnderDevelopment = () => {
  return (
    <div className="under-development-wrapper">
      <div className="under-development-content">
        <div className="icon">
          🚧
        </div>
        <h1 className="title">Page Under Development</h1>
        <p className="message">We are working hard to bring this page to life. Stay tuned!</p>
      </div>
    </div>
  );
};

export default UnderDevelopment;