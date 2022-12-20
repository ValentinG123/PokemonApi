import axios from "axios";
import React,{useState,useEffect} from "react";
import Main from "./components/Main";
import Navbar from './components/Navbar'
import PokemonCard from "./components/PokemonCard";
import PokemonSelect from "./components/PokemonSelect";
function App() {
  const [pokemonData,setPokemonData] = useState([])
  const [name,setName] = useState('bulbasaur')
  const [evolutionUrl,setEvolutionUrl] = useState([])


useEffect(() => {
    const getPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`
      const response = await axios.get(url)
      setPokemonData(response.data)

    }
   
 getPokemon()
}, [name])

  return (
    <div className="max-w-[420px] bg-black h-screen home bg-no-repeat bg-cover">
      {/* <Navbar/>
      <Main/>
      <PokemonCard /> */}
      {
        pokemonData.length === 0 ? <div>Verga</div> :  <PokemonSelect pokemonData={pokemonData}/>

      }
    </div>
  );
}

export default App;
