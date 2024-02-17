import { useState, useEffect, useTransition } from "react";
import Pokecard from "./pokecard"

export default function PokeSearch({ selectedPokemon, setSelectedPokemon }) {
    const [pokemonsData, setPokemonsData] = useState([]);
    const [inputSearch, setInputSearch] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300")
            .then((res) => res.json())
            .then((data) => {
                const results = data.results.map((pokemonDetails, index) => {
                    // console.log(res.results.pokemonData)
                    return { ...pokemonDetails, index: index + 1 };
                });
                setPokemonsData({ ...data, results })
                console.log(results);
            });
    }, []);

    return (
        <div className="card drop-shadow-lg bg-base-300">
            <div className="card-body" >
                <input
                    type="text"
                    placeholder="Search for pokemon..."
                    className="input input-bordered w-full"
                    onChange={(e) => {
                        setInputSearch(e.target.value.toLowerCase());
                    }}
                />
                <div className="overflow-x-auto rounded-md max-h-96 drop-shadow-lg">
                    <table className="table table-zebra w-96 ">
                        <thead>
                            <tr>
                                <th>Name</th>
                                {/* <th></th> */}
                                {/* <th>Type</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map over all data and filter by search results */}

                            {pokemonsData.results && pokemonsData.results.filter((pokemon) => pokemon.name.includes(inputSearch)).map((pokemon, index) => {
                                return (
                                    <div>
                                        <tr key={index}>
                                            <th>
                                                <div onClick={()=>document.getElementById('my_modal_1').showModal()}>
                                                    <a onClick={() => setSelectedPokemon(pokemon)} href="#select" className="flex items-center">
                                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`} width={40} />
                                                        <p className={`align-middle }`}>
                                                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                                        </p>
                                                    </a>
                                                </div>
                                            </th>
                                        </tr>
                                    </div>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                {selectedPokemon && <Pokecard selectedPokemon={selectedPokemon.index}/>}
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </dialog>
        </div>
    )
}