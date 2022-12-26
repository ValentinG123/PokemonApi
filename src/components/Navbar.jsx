import React, { useState } from "react";
import pokeball from "../assets/pokepoke.png";
import { FaBars } from "react-icons/fa";
const Navbar = ({ setPage,setFilter,setPokemonFilteredData }) => {
  const [toggle, setToggle] = useState(false);
  const types = [
    "fighting",
    "poison",
    "rock",
    "ghost",
    "fire",
    "grass",
    "psychic",
    "dragon",
    "fairy",
    "normal",

  ];
  const types2 = [
    "flying",
    "ground",
    "bug",
    "steel",
    "water",
    "electric",
    "ice",
    "dark",
    
  ];

  return (
    <div className="w-full h-20 flex justify-between items-center relative">
      <button
        onClick={() => {setPage(0);setPokemonFilteredData('');setFilter('')}}
        className="text-white mx-6 flex items-center text-2xl"
      >
        P
        <span>
          <img src={pokeball} alt="" className="w-4 h-4" />
        </span>
        kedex
      </button>
      <div className="mx-6" onClick={() => setToggle((prev) => !prev)}>
        <FaBars className="text-2xl" />
      </div>
      {toggle ? (
        <div className="absolute flex bg-black/40 w-full h-96 top-20">
            <div className=" bg-black/80 space-y-2 flex flex-col w-[50%]">
              {types.map((type,indx) => (
                <button className="text-xl" key={indx} onClick={() => {setToggle((prev) => !prev);setFilter(type);setPage(0)}}>{type}</button>
                ))}
            </div>
          <div className=" bg-black/80 space-y-2 flex flex-col w-[50%]">
              {types2.map((type,indx) => (
                <button className="text-xl" key={indx} onClick={() => {setToggle((prev) => !prev);setFilter(type);setPage(0)}}>{type}</button>
                ))}
                <button className="text-xl" onClick={() => {setToggle((prev) => !prev);setFilter('');setPage(0);setPokemonFilteredData('')}}>All</button>

          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
