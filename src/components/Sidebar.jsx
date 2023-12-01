import { POKEMON_URL, POKE_API_LOGO } from "../constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [pokemonImage, setPokemonImage] = useState("");
  const currentPName = useSelector((state) => state.pokemon.currentName);

  useEffect(() => {
    fetch(`${POKEMON_URL}/${currentPName}`)
      .then((res) => res.json())
      .then((res) => setPokemonImage(res.sprites.front_default));
  }, [currentPName]);
  return (
    <>
      <div id="sidebar">
        <img src={POKE_API_LOGO} />
        <img id="poke-image" src={pokemonImage} />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
