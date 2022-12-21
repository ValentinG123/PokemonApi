import axios from "axios";

export const getPokemon = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    const response = await axios.get(url);
    return response.data
  };

export const searchPokemones = async (limit=4,offset=0) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const response = await axios.get(url);
     return response
  };

  export const getPokemonData = async (url) => {
    const response = await axios.get(url)
    return response
  }