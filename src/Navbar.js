import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [hides, sethides] = useState(false);
  // const [Active, setActive] = useState(true);
  return (
    <>
      <nav>
        <div className="navbar">
          <b className="logo">
            RICK <span style={{ fontSize: "20px", margin: "0 -5px" }}>&</span>{" "}
            MORTY
          </b>
          <span className="nav-btn" onClick={() => sethides(!hides)}>
            {hides ? (
              <CloseIcon id="nav-btn"></CloseIcon>
            ) : (
              <MenuIcon id="nav-btn"></MenuIcon>
            )}
          </span>

          <ul className={`${hides ? "" : "hide"}`}>
            <li className="navlink">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "orangered" : "white",
                  // background: isActive ? "#7600dc" : "#f0f0f0",
                })}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="navlink">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "orangered" : "white",
                  // background: isActive ? "#7600dc" : "#f0f0f0",
                })}
                to="/characters"
              >
                Characters
              </NavLink>
            </li>
            <li className="navlink">
              {" "}
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "orangered" : "white",
                  // background: isActive ? "#7600dc" : "#f0f0f0",
                })}
                to="/episodes"
              >
                Episodes
              </NavLink>
            </li>
            {/* <li></li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
