import React from 'react'
import pokeball from '../assets/pokepoke.png'
import bars from '../assets/bars.webp'
const Navbar = () => {
  return (
    <div className='w-full h-20 bg-gray-800 flex justify-between items-center'>
      <h1 className='text-white mx-6 flex items-center text-2xl'>P<span><img src={pokeball} alt="" className='w-4 h-4'/></span>kedex</h1>
      <div className='mx-6'>
        
        <img src={bars} alt="" className='w-8'/>
      </div>
      <div className='hidden flex flex-col justify-center items-center bg-red-200 w-full h-96'>
        <ul className=' bg-red-500 space-y-8'>
          <li>Electric</li>
          <li>Electric</li>
          <li>Electric</li>
          <li>Electric</li>
          <li>Electric</li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar