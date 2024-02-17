import Pokecard from './pokecard.jsx'
import NavBar from "./Layout/Navbar"
import PokeSearch from "./PokeSearch"
import { useState } from "react";

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <main className="mx-auto bg-[#363B81] ">
      <NavBar />
      {/*Main Section */}
      <section className="px-6 py-8 flex items-center justify-center ">
        <div className="gap-4 flex flex-col items-center">
          <h1 className="text-xl font-bold">Search for your favorite Pokemon</h1>
          <div className="">
            <PokeSearch setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} />
          </div>
        </div>
      </section>

      {selectedPokemon &&
        <div>{selectedPokemon.name}</div>
      }

      {/* <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /> */}
    </main>
  )
}

export default App
