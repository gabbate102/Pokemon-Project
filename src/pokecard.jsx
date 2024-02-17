import React from 'react'
import { useEffect, useState } from "react";
import "./App.css";

export default function Pokecard(props) {
  const [pokemon, setPokemon] = useState([]);
  // get data for selected pokemon from api
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data);
            console.log(data);
        });
  }, []);
  /*
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((data) => setPokemon(data))
  }, [selectedPokemon]);
  */
  return (
  <div>
    { pokemon && pokemon.sprites &&
    <div class="pokecard flex-col items-center justify-center">
      <div class="flex justify-between">
        <p class="card-title">{pokemon.name}</p>
        <p class="hp">HP: {pokemon.stats[0]["base_stat"]}</p>
      </div>
      <div class="w-[214] photo-section">
        <img className="w-72" src={pokemon.sprites["front_shiny"]}></img>
      </div>
      <div class="flex-col justify-center mt-2">
        <p class="attack">Attack: {pokemon.stats[1]["base_stat"]}</p>
        <p class="defense">Defense: {pokemon.stats[2]["base_stat"]}</p>
        <p class="speed">Speed: {pokemon.stats[5]["base_stat"]}</p>
      </div>
      <div class="flex justify-end mt-6">
        <button className="btn">Favorite</button>
      </div>
    </div>
    }
  </div>
  )
}