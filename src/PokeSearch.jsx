import { useState, useEffect, useTransition } from "react";

export default function PokeSearch({ setSelectedPokemon }) {

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
            });
    }, []);

    useEffect(() => {

        if (inputSearch?.length === 0) {
            setFilteredPokemon([]);
        }

        const filter = pokemonsData.results?.filter((pokemon) => pokemon.name.includes(inputSearch));

        if (filter?.length <= 10) {
            setFilteredPokemon(filter)
        }


        console.log(filteredPokemon);
    }, [pokemonsData.results, inputSearch]);


    return (
        <div className="flex gap-8 w-full items-top justify-center">
            <input onChange={(e) => {
                setInputSearch(e.target.value);
                console.log('hi');
            }
            } type="text" placeholder="Pikachu" className="input input-bordered input-primary w-64" />
            <div className="grid grid-cols-2 gap-4 h-full">
                {
                    filteredPokemon?.map((pokemon) => {
                        return (
                            <div key={pokemon.name} className="">
                                <button onClick={() => setSelectedPokemon(pokemon)} className="btn btn-success">
                                    {pokemon.name}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}