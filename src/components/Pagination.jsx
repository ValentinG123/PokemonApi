import React from 'react'
import {BiLastPage,BiFirstPage} from 'react-icons/bi'
const Pagination = ({nextPage,backPage,page}) => {
  return (
    <div className='flex justify-evenly'>
        <button className='' onClick={backPage} disabled={page === 0}>
            <BiFirstPage className='text-3xl'/>
        </button>
        <button className='' onClick={nextPage} disabled={page === 288}>
            <BiLastPage className='text-3xl'/>
        </button>
    </div>
  )
}

export default Pagination