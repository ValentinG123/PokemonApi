import axios from "axios";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import PokemonCard from "./components/PokemonCard";
import PokemonSelect from "./components/PokemonSelect";
import {
  getPokemon,
  searchPokemones,
  getPokemonData,
  getPokemonFilter,
  getPokemonFilteredData,
  getSelectedPokemon,
} from "./Api";
import Pagination from "./components/Pagination";
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [initialPokemon, setInitialPokemon] = useState([]);
  const [filter, setFilter] = useState("");
  const [pokemonFilteredData, setPokemonFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(6);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const enviarDatos = (event) => {
    event.preventDefault();
  };

  const searchName = async () => {
    try {
      const nombre = name.toLowerCase();
      const data = await getPokemon(nombre);
      setPokemonData(data);
      setLoading(false);
    } catch {
      setLoading(false);
      console.log("Pokemon not Found");
    }
  };
  const fetchPokemones = async () => {
    try {
      const data = await searchPokemones(6, 6 * page);
      const response = data.data.results.map(async (responses) => {
        return await getPokemonData(responses.url);
      });
      const results = await Promise.all(response);
      setInitialPokemon(results);
    } catch {
      console.log("Pokemon not Found");
    }
  };
  const fetchPokemonesFiltered = async () => {
    try {
      const data = await getPokemonFilter(filter);
      const response = data.data.pokemon.map(async (pokemon) => {
        return await getPokemonFilteredData(pokemon.pokemon.url);
      });
      const results = await Promise.all(response);
      setPokemonFilteredData(results);
    } catch {
      console.log("Filter No Found");
    }
  };
  const seletedPokemon = async (url) => {
    const response = await getSelectedPokemon(url);
    setPokemonData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemones();
    fetchPokemonesFiltered();
  }, [page, filter]);
  return (
    <div className="max-w-[420px] h-screen home bg-no-repeat bg-cover">
      {loading ? (
        <div className="text-white">
          <Navbar
            setPage={setPage}
            setFilter={setFilter}
            setPokemonFilteredData={setPokemonFilteredData}
          />
          <Main
            name={name}
            handleInputChange={handleInputChange}
            enviarDatos={enviarDatos}
            searchName={searchName}
          />
          <PokemonCard
            SelectedPokemon={seletedPokemon}
            initialPokemon={initialPokemon}
            pokemonFilteredData={pokemonFilteredData}
            page={page}
            perPage={perPage}
          />
          <Pagination
            nextPage={() => setPage(page + 1)}
            backPage={() => setPage(page - 1)}
            page={page}
          />
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/valentin-graglia-a416aa20b/"
              target="_blank"
              className="mx-auto my-2"
            >
              Valentin Graglia
            </a>
          </div>
        </div>
      ) : (
        <PokemonSelect
          pokemonData={pokemonData}
          setPokemonData={setPokemonData}
          setLoading={setLoading}
          setName={setName}
        />
      )}
    </div>
  );
}

export default App;
