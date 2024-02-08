import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
const Characters = () => {
  const [Characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  //   let [fetchedData, updateFetchedData] = useState([]);
  let [status, setstatus] = useState("");
  let [search, setSearch] = useState("");
  const [error, seterror] = useState("");
  //   let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?name=${search}&status=${status}&gender=${gender}&page=${currentPage}`;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(api);
        const jsonData = await response.json();
        // console.log(jsonData);
        setCharacters(jsonData.results);
        setTotalPages(jsonData.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
    // console.log(Characters);
  }, [api]);
  const handleNextPageChange = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };
  const handlePrevPageChange = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage === 1) {
      setCurrentPage(1);
    }
    console.log(currentPage);
  };

  return (
    <div>
      <section className="characters-container">
        <div className="srch-bar">
          <h1>Characters</h1>
          <div className="char-filter">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search characters..."
            />{" "}
            {/* <button>Search</button> */}
            <div className="select-con">
              <select
                name="status"
                className="life-status"
                onChange={(e) => setstatus(e.target.value)}
              >
                <option value="">Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknow">Unknow</option>
              </select>
            </div>
          </div>
        </div>
        <div className="characters">
          {Characters?.map((char) => (
            <Card info={char}></Card>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPageChange}>Previous</button>
          <button onClick={handleNextPageChange}>Next</button>
        </div>
      </section>
    </div>
  );
};

export default Characters;
