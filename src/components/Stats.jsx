import React from 'react'
import BarProgress from './BarProgress'

const Stats = (props) => {
  const pokemon = props.pokemon
    const statusData = [
         {
           status: "Hp",
           bgcolor: "bg-red-500",
           completed: pokemon.stats[0].base_stat,
         },
         {
           status: "Def",
           bgcolor: "bg-blue-500",
           completed: pokemon.stats[2].base_stat,
         },
         {
           status: "Atk",
           bgcolor: "bg-yellow-400",
           completed: pokemon.stats[1].base_stat,
         },
         {
           status: "Spd",
           bgcolor: "bg-blue-200",
           completed: pokemon.stats[5].base_stat,
         },
      ];
  return (
    
    <div className="flex items-center flex-col justify-center h-full rounded-t-xl mx-2">
    <h4 className="py-1 text-white text-center text-2xl">Base Stats</h4>

    {statusData.map((statusData, idx) => (
      <div className="flex w-full justify-center items-center px-5 py-[1px]" key={idx}>
        <p className="text-[14px] px-2 text-white">
          {statusData.status}
        </p>

        <BarProgress
          bgcolor={statusData.bgcolor}
          completed={statusData.completed}
          key={idx}
        />
      </div>
    ))}
  </div>
  )
}

export default Stats