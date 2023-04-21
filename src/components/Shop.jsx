import React from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div className='h-screen bg-[#BADAD5] flex flex-col justify-center items-center'>
      <img src="dog.jpg" alt="" className='h-40'/>
      <h1 className='text-4xl text-[#484180]'>Work in progress</h1>
      <Link to='/' className='mt-10 text-[#484180] rounded-lg text-2xl p-4'>Back to home</Link>
    </div>
  )
}

export default Shop