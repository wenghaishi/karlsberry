import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <div className='h-screen bg-[#BADAD5] flex flex-col justify-center items-center'>
      <img src="dog.jpg" alt="" className='h-40'/>
      <h1 className='text-4xl'>Work in progress</h1>
      <Link to='/' className='mt-10 bg-[#69a49b] rounded-lg text-2xl p-4'>Back to home</Link>
    </div>
  )
}

export default Team