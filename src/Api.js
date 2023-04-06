import axios from "axios";

export const getPokemon = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await axios.get(url);
    return response.data
  };

export const searchPokemones = async (limit=6,offset=0) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const response = await axios.get(url);
     return response
  };

  export const getPokemonData = async (url) => {
    const response = await axios.get(url)
    return response
  }

  export const getPokemonFilter = async (type) => {
    const url = `https://pokeapi.co/api/v2/type/${type}`
    const response = await axios.get(url)
    return response
  }
  export const getPokemonFilteredData = async (url) => {
    const response = await axios.get(url)
    return response
  }
  export const getSelectedPokemon = async (url) => {
    const response = await axios.get(url)
    return response
  }