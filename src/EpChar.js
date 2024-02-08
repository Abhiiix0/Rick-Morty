import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
const EpCard = ({ url }) => {
  //   let infos = "";
  const [info, setinfo] = useState();

  useEffect(() => {
    const fetchepchar = async () => {
      try {
        const res = await fetch(url);
        const jsonData = await res.json();

        setinfo(jsonData);
        // console.log(info);
      } catch (error) {
        console.log(error);
      }
    };

    fetchepchar();
    // console.log(jsonData);
    console.log(info);
  }, []);

  return info ? <Card info={info}></Card> : "";
};

export default EpCard;
