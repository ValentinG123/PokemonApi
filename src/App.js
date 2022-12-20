import axios from "axios";
import React,{useState,useEffect} from "react";
import Main from "./components/Main";
import Navbar from './components/Navbar'
import PokemonSelect from "./components/PokemonSelect";
function App() {
  const [name,setName] = useState('')
useEffect(() => {

    const getPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=1/`
      const response = await axios.get(url)
      console.log(response)
    }
 getPokemon()
 
}, [])

  return (
    <div className="max-w-[420px] bg-black h-screen home bg-no-repeat bg-cover">
      <Navbar/>
      <Main/>
      {/* <PokemonSelect/> */}
    </div>
  );
}

export default App;
