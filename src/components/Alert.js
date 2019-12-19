import React, { useState, useEffect } from "react";

const Alert = ({ value, device }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (value > 27) {
      setIsShown(true);

      const timer = setTimeout(() => {
        setIsShown(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const dynammicModalClass = () => (isShown ? { display: "block" } : "");

  const closeModal = () => {
    setIsShown(false);
  };

  return isShown ? (
    <div className="alert-container">
      <div className="alert-wrapper" style={dynammicModalClass()}>
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <div className="alert-desc">
          <h3>{device} exceeded 27 &#8451; !!!</h3>
          <h3>Current Temperature: {value}</h3>
        </div>
      </div>
    </div>
  ) : null;
};

export default Alert;
