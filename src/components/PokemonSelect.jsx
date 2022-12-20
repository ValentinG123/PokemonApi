import React from 'react'
import arrowleft from '../assets/arrowLeft.png'
const PokemonSelect = () => {
   
  return (
    <div className='w-full h-screen'>

        <div className='electrico bg-no-repeat bg-cover w-full h-full flex flex-col items-center'>
            <div className='bg-red-200 flex items-center w-full h-10 justify-between'>
                <img src={arrowleft} alt="" className='w-8 h-8 mx-4'/>
                <p className='mx-6'>#06</p>
            </div>
            <div className='bg-red-400 w-60 h-60 text-center my-5'>

            </div>
            <div className='bg-red-600 w-full'>
                <h1 className='text-center text-3xl'>Charizard</h1>
                <div className='flex bg-red-200 justify-between'>
                   <p className='mx-14'> Weigth:20kg</p>
                   <p className='mx-14'>Heigth: 180</p>
                </div>
            </div>
            <div className='bg-green-400 w-full h-56 my-5'>

            </div>
            <div>
            <h3>Evolution</h3>
            </div>
        </div>
    </div>
  )
}

export default PokemonSelect