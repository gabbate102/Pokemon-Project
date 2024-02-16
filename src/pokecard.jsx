import { useEffect } from "react";
import "./App.css";

export default function Pokecard({selectedPokemon}) {

  const [pokemon, setPokemon] = useState([]);
  // get data for selected pokemon from api
  useEffect(() => {
    fetch(`${selectedPokemon.url}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
  }, [selectedPokemon]);
  return (
  <div>
    <div class="pokecard">
      <div>
        <p class="card-title">Name</p>
      </div>
      <div class="w-56 h-52">
        img
      </div>
      <div>details section</div>
      <div>bottom section</div>
    </div>
  </div>
  )
}