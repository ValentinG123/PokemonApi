import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const Main = ({enviarDatos,searchName,handleInputChange}) => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <h2 className='text-white text-2xl my-4'>
        Wich pokemon are you<br/>Loking for
        </h2>
        <form className="bg-gray-500 w-72 h-8 rounded-full flex justify-evenly items-center" onSubmit={enviarDatos}>
                    <input type="text" placeholder="Pokemon Name" className="bg-transparent" onChange={handleInputChange} name="nombre"></input>
                    <button type="submit" onClick={searchName} className="text-2xl text-white"><AiOutlineSearch/></button>

            </form>
        </div>
  )
}

export default Main