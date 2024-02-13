import Pokecard from './Pokecard.jsx'
import NavBar from "./Layout/Navbar"
import PokeSearch from "./PokeSearch"
import { useState } from "react";

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <main className="mx-auto bg-[#363B81] ">
      <NavBar />
      {/*Main Section */}
      <section className="px-6 py-8 flex h-96 items-center justify-center ">
        <div className="gap-4 flex flex-col">
          <h1 className="text-xl">Search for your favorite Pokemon</h1>
          <div className="flex">
            <PokeSearch setSelectedPokemon={setSelectedPokemon} />
          </div>
        </div>
      </section>

      {selectedPokemon &&
        <div>{selectedPokemon.name}</div>
      }

      {/* <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /> */}
      <Pokecard/>
    </main>
  )
}

export default App
