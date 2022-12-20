import React from 'react'
import arrowleft from '../assets/arrowLeft.png'
import Stats from './Stats'
const PokemonSelect = ({pokemonData}) => {
  console.log(pokemonData)
  return (
    <div className='w-full h-screen'>
    
 {
 pokemonData === undefined ? 
 (
  <div className="bg-white w-[300px] h-[200px] flex justify-center items-center flex-col rounded-3xl mt-20 mx-auto">
    <h2 className="text-red-400 uppercase">Sorry</h2>
    <div className="flex items-center">
      <span className="text-[50px]">4</span>
      <img src='' alt="" className="w-[40px] h-[40px]" />
      <span className="text-[50px]">4</span>
    </div>
    <p>Pokemon don't found</p>
  </div>
) :
  (
    <div className={`${pokemonData.types[0].type.name} bg-no-repeat bg-cover w-full h-full flex flex-col items-center`}>
    <div className='flex items-center w-full h-10 justify-between'>
        <img src={arrowleft} alt="" className='w-8 h-8 mx-4'/>
        <p className='mx-6 font-bold text-2xl'>#{pokemonData.id}</p>
    </div>
    <div className=' w-60 h-60 my-5 flex justify-center items-center'>
    <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
    </div>
    <div className='w-full'>
        <h1 className='text-center text-4xl uppercase'>{pokemonData.name}</h1>
        <div className='flex justify-evenly my-1'>
          {
            pokemonData.types.length === 2 ? 
            <div className='flex'>
                        <p className=' w-24 h-7 rounded-full text-center'>{pokemonData.types[0].type.name}</p>
           <p className='w-24 h-7 rounded-full text-center'>{pokemonData.types[1].type.name}</p>
            </div> :
            <div>
                        <p className=' w-24 h-7 rounded-full text-center'>{pokemonData.types[0].type.name}</p>
            </div>
          }
 
        </div>
        <div className='flex justify-between'>
           <p className='mx-10 font-bold'> Weigth:<span className='font-normal'>{pokemonData.weight}</span></p>
           <p className='mx-10 font-bold'>Heigth: <span className='font-normal'>{pokemonData.height}</span></p>
        </div>
    </div>
    <div className='w-full h-42 my-5'>
      <Stats pokemon={pokemonData}/>
    </div>
</div>
  )
  
 }
 
  

    </div>
  )
}

export default PokemonSelect