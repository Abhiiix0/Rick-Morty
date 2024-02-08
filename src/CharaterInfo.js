import React from "react";
import { useLocation } from "react-router-dom";
const CharaterInfo = () => {
  let location = useLocation();
  console.log(location.state.info.name);
  let background;
  switch (location.state.info.status) {
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
    <>
      <div className="single-character">
        <div className="box">
          <p className="s-name">{location.state.info.name}</p>
          <img src={location.state.info.image} alt="" />
          <p className="s-status" style={{ backgroundColor: background }}>
            {location.state.info.status}
          </p>
          <p className="s-gender">
            <b>Gender</b> : {location.state.info.gender}
          </p>
          <p className="s-location">
            <b>Location</b>: {location.state.info.location.name}
          </p>
          <p className="s-origin">
            <b>Origin</b>: {location.state.info.origin.name}
          </p>
          <p className="s-species">
            <b>Species</b>: {location.state.info.species}
          </p>
        </div>
      </div>
    </>
  );
};

export default CharaterInfo;
