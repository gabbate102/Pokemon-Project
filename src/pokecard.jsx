import { useEffect, useState } from "react";
import "./index.css";

export default function Pokecard({selectedPokemon}) {
  console.log(selectedPokemon)
  const [pokemon, setPokemon] = useState([]);
  console.log(selectedPokemon)
  // get data for selected pokemon from api
  useEffect(() => {
    fetch(`${selectedPokemon.url}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
  }, [selectedPokemon]);
  return (
    <div>
      <div class="pokecard">
        <div class="flex justify-between">
          <p class="pokemon-title">{selectedPokemon.name}</p>
          <p class="hp">HP: 50</p>s
        </div>
          <div class="w-56 h-52">
            img
          </div>
        <div>
        </div>
        <div>details section</div>
        <div>bottom section</div> 
      </div>
    </div>
  )
}
