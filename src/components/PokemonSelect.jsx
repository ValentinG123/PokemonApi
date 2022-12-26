import React from 'react'
import Stats from './Stats'
import pokepoke from '../assets/pokepoke.png'
import {BsArrowLeft} from 'react-icons/bs'
const PokemonSelect = ({pokemonData,setLoading,setName,setPokemonData}) => {
  const clean = () => {
    setLoading(true)
    setName('')
    setPokemonData('')
  }
  return (
    <div className='w-full h-screen'>
   
 {
 pokemonData.length === 0 ? 
 (
  <div className=''>
    <button onClick={clean} className='text-3xl mx-3 my-3 text-white'><BsArrowLeft/></button>
  <div className="bg-white w-[300px] h-[200px] flex justify-center items-center flex-col rounded-3xl my-8 mx-auto"> 
    <h2 className="text-red-400 uppercase">Sorry</h2>
    <div className="flex items-center">
      <span className="text-[50px]">4</span>
      <img src={pokepoke} alt="" className="w-[40px] h-[40px]" />
      <span className="text-[50px]">4</span>
    </div>
    <p>Pokemon don't found</p>
  </div>
  </div>
) :
  (
    <div className={`${pokemonData.types[0].type.name} bg-no-repeat bg-cover w-full h-full flex flex-col items-center`}>
    <div className='flex items-center w-full h-10 justify-between'>
    <button onClick={clean} className='text-3xl mx-3'><BsArrowLeft/></button>
        <p className='mx-6 font-bold text-2xl'>#{pokemonData.id}</p>
    </div>
    <div className=' w-60 h-60 my-5 flex justify-center items-center'>
    <img src={pokemonData.sprites.other.dream_world.front_default === null ? pokemonData.sprites.other.home.front_default : pokemonData.sprites.other.dream_world.front_default } alt="" />
    </div>
    <div className='w-full'>
        <h1 className='text-center text-4xl uppercase'>{pokemonData.name}</h1>
        <div className='flex justify-evenly my-3'>
          {
            pokemonData.types.length === 2 ? 
            <div className='flex w-full justify-evenly'>
                        <p className={`${pokemonData.types[0].type.name} border-2 border-black bg-cover bg-center w-24 font-bold h-7 rounded-full text-center`}>{pokemonData.types[0].type.name}</p>
           <p className={`${pokemonData.types[1].type.name} border-2 border-black bg-cover bg-center w-24 font-bold h-7 rounded-full text-center`}>{pokemonData.types[1].type.name}</p>
            </div> :
            <div>
                        <p className={`${pokemonData.types[0].type.name} border-2 border-black bg-cover bg-center w-24 font-bold h-7 rounded-full text-center`}>{pokemonData.types[0].type.name}</p>
            </div>
          }
 
        </div>
        <div className='flex justify-between'>
           <p className='mx-10 font-bold'> Weigth:<span className='font-normal'>{pokemonData.weight}</span></p>
           <p className='mx-10 font-bold'>Heigth: <span className='font-normal'>{pokemonData.height}</span></p>
        </div>
    </div>
    <div className='my-5'>
      <Stats pokemon={pokemonData}/>
    </div>
</div>
  )
  
 }
 
  

    </div>
  )
}

export default PokemonSelect