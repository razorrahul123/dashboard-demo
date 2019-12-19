import React from "react";

const Card = ({ heading, title, temp }) => {
  return (
    <div className="card-container">
      <div className="temp-heading">{heading}</div>
      <div className="device-heading">{title}</div>
      <div className="temp-container">{temp} &#8451;</div>
    </div>
  );
};

export default Card;
