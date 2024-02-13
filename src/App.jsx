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

  return (
    <main className="mx-auto bg-[#363B81] ">
      <NavBar />
      {/*Main Section */}
      <section className="flex items-center">
        <div className="gap-4 flex flex-col">
          <h1 className="text-xl font-light text-center">Search for your favorite Pokemon</h1>
          <div className="">
            <PokeSearch setSelectedPokemon={setSelectedPokemon} setFavorites={setFavorites} />
          </div>
        </div>
      </section>

      <section className="bg-gray-800 items-start">
        <div>
          <h1 className="font-light text-xl">Your favorite pokemon</h1>
          <div className="grid grid-cols-8 gap-8">
            {favorites && favorites.map((pokemon, idx) => {
              return (

                <div className="flex flex-col items-center" idx={idx}>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`} width={80} />
                  <p>{pokemon.name}</p>
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
