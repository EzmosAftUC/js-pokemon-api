import React, { useState } from 'react';
import './App.css';
//
import Axios from 'axios';

function App() {

  const [pokemon, setPoke] = useState("");
  const [poke, setPokemon] = useState({
    name: "", 
    img: "", 
    hp: "",
    weight: "",
    height: "",
    base: "",
  });

  const searchPoke = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) =>
    {
      setPokemon({
        name: pokemon, 
        img: response.data.sprites.front_default, 
        weight: response.data.weight,
        height: response.data.height,
        base: response.data.base_experience,
        hp: response.data.stats[0].base_stat});
    });
  }

  return (
    <div className="App">
      <div className="header">
          <h1 className="title">Pokedex</h1>
          <input 
            placeholder='type name of pokemon here...'
            type="text" 
            onChange={(event) => {setPoke(event.target.value)}} 
          />
          <button onClick={searchPoke}>Find Pokemon!</button>
      </div>
      <div className="display">
        <div className="pokePic">
          <img src={poke.img} alt=""/>
        </div>
        <div className="info">
          <h3>Name: {poke.name}</h3>
          <h3>HP: {poke.hp}</h3>
          <h3>Weight: {poke.weight}</h3>
          <h3>Height: {poke.height}</h3>
          <h3>Base Experience: {poke.base}</h3>
        </div>
      </div>
    </div>    
  )
}

export default App;
