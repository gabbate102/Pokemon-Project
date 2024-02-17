import React from 'react'
import { useEffect, useState } from "react";
import "./App.css";

export default function Pokecard({selectedPokemon, setFavorites}) {
  const [pokemon, setPokemon] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  // get data for selected pokemon from api
  useEffect(() => {
    if (selectedPokemon != undefined) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}/`)
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data);
            console.log(data);
        });
    }
  }, [selectedPokemon]);

  useEffect(() => {
    if (isFavorite == true) {
      // save each selected pokemon to an array in local storage, make sure it doesnt add duplicates, also update state
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (!favorites.some(fav => fav.name === pokemon.name)) {
          favorites.push(pokemon);
          localStorage.setItem('favorites', JSON.stringify(favorites));
          setFavorites(favorites);
      }
    }
  }, [isFavorite])
  return (
  <div>
    {selectedPokemon && pokemon && pokemon.sprites &&
    <div class="pokecard flex-col items-center justify-center">
      <div class="flex justify-between">
        <p class="card-title">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        <p class="hp">HP: {pokemon.stats[0]["base_stat"]}</p>
      </div>
      <div class="w-[214] photo-section flex">
        <img className="w-72" src={pokemon.sprites["front_shiny"]}></img>
      </div>
      <div class="flex-col justify-center mt-2">
        <p class="attack">Attack: {pokemon.stats[1]["base_stat"]}</p>
        <p class="defense">Defense: {pokemon.stats[2]["base_stat"]}</p>
        <p class="speed">Speed: {pokemon.stats[5]["base_stat"]}</p>
      </div>
      <div class="flex justify-end mt-6">
        <button className="btn" onClick={() => {
          setIsFavorite(true)
        }}>Favorite</button>
      </div>
    </div>
    }
  </div>
  )
}