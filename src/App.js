import React, { useState } from 'react';
import './App.css';
//
import Axios from 'axios';

function App() {

  const [pokemon, setPoke] = useState("");
  const [poke, setPokemon] = useState({
    name: "", 
    species: "", 
    img: "", 
    hp: "",
    weight: "",
    height: "",
    base: "",
  });

  const searchPoke = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) =>
    {
      setPokemon({
        name: pokemon, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default, 
        weight: response.data.weight,
        height: response.data.height,
        base: response.data.base_experience,
        hp: response.data.stats[0].base_stat});
    });
  }

  return (
  <>
    <div className="App">
      <div className="header">
        <h1 className="title">Pokedex</h1>
          <input type="text" onChange={(event) => {setPoke(event.target.value);}}/>
          <button onClick={searchPoke}>submit</button>
      </div>
          <div className="display">

            <div className="info">
              <h1>Name: {poke.name}</h1>
              <h1>Species: {poke.species}</h1>
              <h1>HP: {poke.hp}</h1>
              <h1>Weight: {poke.weight}</h1>
              <h1>Height: {poke.height}</h1>
              <h1>Base Experience: {poke.base}</h1>
            </div>

            <div className="pokePic">
              <img src={poke.img} alt="pokepic"/>
            </div>

          </div>
    </div>    
  </>
  );
}

export default App;
