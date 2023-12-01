import { Link } from "react-router-dom";
import { POKEMON_URL } from "../constants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { LinearProgress } from "@mui/material";

export default function Info() {
  const [type, setType] = useState();
  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [stats, setStats] = useState([]);
  const [abilities, setAbilities] = useState([]);

  const currentPName = useSelector((state) => state.pokemon.currentName);

  useEffect(() => {
    fetch(`${POKEMON_URL}/${currentPName}`)
      .then((res) => res.json())
      .then((res) => {
        setType(res.types[0].type.name);
        setNumber(res.id);
        setName(res.name);
        setHeight(res.height);
        setWeight(res.weight);
        setStats(res.stats);
        setAbilities(res.abilities);
      });
  }, [currentPName]);

  return (
    <div>
      <Link id="go-back" to="/">
        Go back
      </Link>
      <div id="info-type">Type</div>
      <div id="type">{type}</div>
      <div id="info-attributes">
        <div>Number: {number}</div>
        <div>Name: {name}</div>
        <div>Height: {height}</div>
        <div>Weight: {weight}</div>
      </div>
      <Grid container>
        <Grid id="stats" item xs={6}>
          <div>Stats </div>
          {stats.map((value, index) => {
            return (
              <ul key={index}>
                {value.stat.name} {value.base_stat}
                <LinearProgress variant="determinate"  value={value.base_stat} />
              </ul>
            );
          })}
        </Grid>
        <Grid id="abilities" item xs={6}>
          <div>Abilities </div>
          {abilities.map((value, index) => {
            return <ul key={index}>{value.ability.name}</ul>;
          })}
        </Grid>
      </Grid>
    </div>
  );
}
