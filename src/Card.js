import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Card = ({ info }) => {
  console.log(info);
  let background;

  switch (info.status) {
    case "Alive":
      background = "Green";
      break;
    case "Dead":
      background = "red";
      break;
    case "unknow":
      background = "grey";
      break;
    default:
      break;
  }
  return (
    <NavLink id="card-link" to="/characterInfo" state={{ info }}>
      <div className="char-card">
        <p className="status" style={{ backgroundColor: background }}>
          {info.status}
        </p>
        <img src={info.image} alt="" />
        <p className="char-name">{info.name}</p>
        <p className="char-location">
          last Location <br /> <p className="loc">{info.location.name}</p>
        </p>
      </div>
    </NavLink>
  );
};

export default Card;
