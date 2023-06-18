import React, { useContext, useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { GlobalContext } from "../../context/global";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const {
    searchResults,
    realTimeSearch,
  } =  useContext(GlobalContext)
  const [wordEntered, setWordEntered] = useState("");
  const navigate = useNavigate()

  const displaySearchResults = () => {
    return searchResults.map((pokemon) => {
      return (
        <div
          key={pokemon.id}
          onClick={() => {
            setWordEntered("")
            navigate(`/pokemon/${pokemon.name}`);
          }}
          className="pokemon-name"
        >
          {pokemon.name}
        </div>
      );
    });
  };


const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    realTimeSearch(searchWord);
 }

  const clearInput = () => {
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search Images here"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {wordEntered.length > 0 && <CloseIcon id="clearBtn" onClick={clearInput}  />}
        </div>
      </div>

      {wordEntered && wordEntered.length > 0 && (
        <div className="search-results">{displaySearchResults()}</div>
      )}

    </div>
  );
}

export default SearchBar;