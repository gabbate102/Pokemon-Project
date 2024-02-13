import { useEffect } from "react";
import "./App.css";

export default function Pokecard(props) {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((res) => res.json())
      
  }, []);
  return (
  <div>
    <div class="fixed pokecard">
      <div>
        <p class="card-title">Name</p>
      </div>
      <div>
      </div>
      <div>details section</div>
      <div>bottom section</div>
    </div>
  </div>
  )
}