import axios from "axios";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import PokemonCard from "./components/PokemonCard";
import PokemonSelect from "./components/PokemonSelect";
import { getPokemon, searchPokemones, getPokemonData,getPokemonFilter,getPokemonFilteredData } from "./Api";
import Pagination from "./components/Pagination";
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [initialPokemon, setInitialPokemon] = useState([]);
  const [filter, setFilter] = useState("fire");
  const [pokemonFilteredData,setPokemonFilteredData] = useState([])
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [page, setPage] = useState(0);
  const [perPage,setPerPage] = useState(6)

const handleInputChange = (event) => {
  setName(event.target.value);
}

  const enviarDatos = (event) => {
    event.preventDefault();
  };

  const searchName = async () => {
    try{    const nombre = name.toLowerCase();
      const data = await getPokemon(nombre);
      setPokemonData(data);
      setLoading(false);}catch{
        setLoading(false)}

  };
  const fetchPokemones = async () => {
    const data = await searchPokemones(6, 6 * page);
    const response = data.data.results.map(async (responses) => {
      return await getPokemonData(responses.url);
    });
    const results = await Promise.all(response);
    setInitialPokemon(results);
  };
   const fetchPokemonesFiltered = async () => {
    try{
     const data = await getPokemonFilter(filter)
     const response = data.data.pokemon.map(async(pokemon) => {
      return await getPokemonFilteredData(pokemon.pokemon.url)
     })
     const results = await Promise.all(response);
     setPokemonFilteredData(results);
    }catch{
      console.log('error')
    }
   }
  useEffect(() => {
    fetchPokemones();
    fetchPokemonesFiltered()
  }, [page]);
  return (
    <div className="max-w-[420px] h-screen home bg-no-repeat bg-cover">
      {loading ? (
        <div className="text-white">
        <Navbar setPage={setPage} />
        <Main handleInputChange={handleInputChange} enviarDatos={enviarDatos} searchName={searchName}/>
        <PokemonCard initialPokemon={initialPokemon} pokemonFilteredData={pokemonFilteredData} page={page} perPage={perPage}/>
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
