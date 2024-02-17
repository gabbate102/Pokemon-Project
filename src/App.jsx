import Pokecard from './pokecard.jsx'
import NavBar from "./Layout/Navbar"
import PokeSearch from "./PokeSearch"
import { useState, useEffect } from "react";

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // get all favorites from local storage and set them to state
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favorites);
  }, []);

  useEffect(() => {
    console.log(selectedPokemon)
  }, [selectedPokemon])

  const removeFavorite = (pokemon) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let newFavorites = favorites.filter(fav => fav.name !== pokemon.name);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }

  return (
    <main className="mx-auto bg-[#363B81] ">
      <NavBar />
      {/*Main Section */}
      <section className="flex items-center">
        <div className="gap-4 flex flex-col">
          <h1 className="text-xl font-light text-center">Search for your favorite Pokemon</h1>
          <div className="">
            <PokeSearch setSelectedPokemon={setSelectedPokemon} setFavorites={setFavorites} selectedPokemon={selectedPokemon} />
          </div>
        </div>
      </section>

      <section className="bg-gray-800 items-start">
        <div className="flex gap-4 flex-col">
          <h1 className="font-light text-xl">Your favorite pokemon</h1>
          <div className="grid grid-cols-8 gap-8">
            {favorites && favorites.map((pokemon, idx) => {
              return (
                <div
                  onClick={() => removeFavorite(pokemon)}
                  className="flex flex-col items-center" idx={idx}>
                  <img src={pokemon.sprites["front_shiny"]} width={80} />
                  <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>



    </main>
  )
}

export default App
