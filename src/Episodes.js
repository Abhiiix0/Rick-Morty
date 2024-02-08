import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import EpCard from "./EpChar";
const Episodes = () => {
  const [epdata, setepdata] = useState([]);
  let [epId, setepId] = useState(1);
  let [char, setchar] = useState([]);
  let api = `https://rickandmortyapi.com/api/episode/${epId}`;

  useEffect(() => {
    const fetchEPs = async () => {
      try {
        const response = await fetch(api);
        const jsonData = await response.json();
        console.log(jsonData);
        // setepdata(jsonData)
        setepdata(jsonData);
        setchar(jsonData.characters);
        console.log(jsonData.characters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEPs();
  }, [api]);

  return (
    <div>
      <div className="ep-container">
        <div className="ep-filter">
          <div>
            <b className="ep-name">
              Episode name : <span className="ep-name-ans">{epdata.name}</span>
            </b>
            <p className="ep-date">Ep Date : {epdata.air_date}</p>
          </div>
          <div className="eps-select">
            <p>Pick Episodes</p>
            <span>
              <select
                name="Eps"
                id="eps"
                onChange={(e) => setepId(e.target.value)}
              >
                <option value="1">Episodes 1</option>
                {Array.from({ length: 51 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    Episode {index + 1}
                  </option>
                ))}
              </select>
            </span>
          </div>

          {/* <div className="ep-container"></div> */}
        </div>
        <div className="eps-container-char characters">
          {/* <Card></Card> */}
          {char.map((ch) => (
            <EpCard url={ch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
