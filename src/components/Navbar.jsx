import React, { useState } from "react";
import pokeball from "../assets/pokepoke.png";
import { FaBars } from "react-icons/fa";
const Navbar = ({ setPage }) => {
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
    "normal",
  ];

  return (
    <div className="w-full h-20 flex justify-between items-center relative">
      <button
        onClick={() => setPage(0)}
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
        <div className="absolute flex  bg-red-200 w-full h-auto top-20">
          <div className="bg-green-200 w-[50%] flex flex-col items-center">
            <ul className=" bg-red-500 space-y-1">
              {types.map((type) => (
                <li className="text-xl">{type}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-400 w-[50%] flex flex-col items-center">
          <ul className=" bg-red-500 space-y-1">
              {types2.map((type) => (
                <li className="text-xl">{type}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
