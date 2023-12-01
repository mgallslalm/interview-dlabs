import "./App.css";
import { useEffect, useState } from "react";
import { POKEMON_URL } from "./constants";
import { useDispatch } from "react-redux";
import { currentName } from "./redux/pokemonSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsRange, setPokemonRange] = useState([0, 20]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increaseCurrentPage = () => {
    if (currentPage < 8) {
      setCurrentPage((value) => (value += 1));
    }
  };

  const decreaseCurrentPage = () => {
    if (currentPage > 0) {
      setCurrentPage((value) => (value -= 1));
    }
  };

  useEffect(() => {
    switch (currentPage) {
      // Since we know that we are fetching a static number of entries
      // I decided to follow this straightforward approach for time purposes
      case 1:
        setPokemonRange([0, 20]);
        break;
      case 2:
        setPokemonRange([20, 40]);
        break;
      case 3:
        setPokemonRange([40, 60]);
        break;
      case 4:
        setPokemonRange([60, 80]);
        break;
      case 5:
        setPokemonRange([80, 100]);
        break;
      case 6:
        setPokemonRange([100, 120]);
        break;
      case 7:
        setPokemonRange([120, 140]);
        break;
      case 8:
        setPokemonRange([140, 151]);
        break;
    }
  }, [currentPage]);

  useEffect(() => {
    fetch(`${POKEMON_URL}?limit=151`)
      .then((res) => res.json())
      .then((res) => {
        setPokemonData(res.results);
      });
  }, []);

  return (
    <>
      {pokemonData
        .slice(pokemonsRange[0], pokemonsRange[1])
        .map((value, index) => {
          return (
            <div key={index}>
              <ul>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(currentName(value.name))}
                  onDoubleClick={() => navigate("/info")}
                >
                  {value.name}
                </li>
              </ul>
            </div>
          );
        })}
      <div id="pagination">
        {currentPage > 1 && <button onClick={decreaseCurrentPage}>Back</button>}
        {currentPage < 8 && <button onClick={increaseCurrentPage}>Next</button>}
      </div>
    </>
  );
}

export default App;
