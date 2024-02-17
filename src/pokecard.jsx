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
    <div class="pokecard">
      <div class="flex justify-between">
        <p class="card-title">{pokemon.name}</p>
        <p class="hp">HP: </p>
      </div>
      <div class="w-56 h-52">
        <image src={pokemon.sprites["front_shiny"]}></image>
      </div>
      <div>details section</div>
      <div>bottom section</div>
    </div>
    }
  </div>
  )
}