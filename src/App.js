import axios from "axios";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import PokemonCard from "./components/PokemonCard";
import PokemonSelect from "./components/PokemonSelect";
import { getPokemon,searchPokemones,getPokemonData } from "./Api";
import Pagination from "./components/Pagination";
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [initialPokemon, setInitialPokemon] = useState([]);
  const [name, setName] = useState("");
  const [page,setPage] = useState(0)
    const fetchPokemones = async () => {
      const data = await searchPokemones(4, 4 * page)
      const response = data.data.results.map(async (responses) => {
       return await getPokemonData(responses.url)
      })
      const results = await Promise.all(response)
      setInitialPokemon(results)
    }

  useEffect(() => {
    
    fetchPokemones()
  }, [page]);
  console.log(page)
  return (
    <div className="max-w-[420px] bg-black h-screen home bg-no-repeat bg-cover">
      {name.length === 0 ? (
        <div className="text-white">
          <Navbar />
          <Main />
          <PokemonCard initialPokemon={initialPokemon}/>
          <Pagination nextPage={() => setPage(page + 1)} backPage={() => setPage(page - 1)} page={page}/>
          <p className="text-center my-4">Valentin Graglia</p>
        </div>
      ) : (
        <PokemonSelect pokemonData={pokemonData} />
      )}
    </div>
  );
}

export default App;
