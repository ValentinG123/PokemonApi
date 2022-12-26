import React from 'react'

const PokemonCard = ({initialPokemon,pokemonFilteredData,page,perPage}) => {
  const pokemones = initialPokemon
  const filterPokemon = pokemonFilteredData
  return (
    <>
       { filterPokemon.length === 0 ? <div className='text-white grid grid-cols-2 gap-3 place-items-center my-4'>
       { pokemones.map((data) => (
          <div className={`w-36 h-28 rounded-xl ${data.data.types[0].type.name}`} key={data.data.id}>
          <div className='flex items-center justify-between h-[75px]'>
            <img src={data.data.sprites.other.dream_world.front_default === null ? data.data.sprites.other.home.front_default : data.data.sprites.other.dream_world.front_default } alt="" className='w-[70px]' />
            <p className='mx-6 text-xl'>#{data.data.id}</p>
          </div>
          <h4 className='text-center my-2 text-md uppercase'>{data.data.name}</h4>
          </div>

        ))}
</div>
        :
        <div className='text-white grid grid-cols-2 gap-3 place-items-center my-4'>
       {
        filterPokemon.slice(
          (page + 0) * perPage,
          (page + 0) * perPage + perPage
        ).map((data) => (
          <div className={`w-36 h-28 rounded-xl ${data.data.types[0].type.name}`} key={data.data.id}>
          <div className='flex items-center justify-between h-[75px]'>
          <img src={data.data.sprites.other.dream_world.front_default === null ? data.data.sprites.other.home.front_default : data.data.sprites.other.dream_world.front_default } alt="" className='w-[70px]' />
            <p className='mx-6 text-xl'>#{data.data.id}</p>
          </div>
          <h4 className='text-center my-2 text-md uppercase'>{data.data.name}</h4>
          </div>
        ))
       }
</div>
       }


    </>
  )
}

export default PokemonCard