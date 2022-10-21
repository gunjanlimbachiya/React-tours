import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  return (
    <div className="tour">
      <img src={tour.image} alt="" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="title">{tour.name}</div>
        <div className="price">$ {tour.price}</div>
      </div>
      <p>{tour.info}</p>

      <button
        onClick={() => {
          removeTour(tour.id);
        }}
      >
        Not Intrested
      </button>
    </div>
  );
};

export default Tour;
