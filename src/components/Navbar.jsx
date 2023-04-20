import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='w-full h-24 flex fixed flex-row justify-between px-6 z-20 items-center bg-inherit'>
      <Link to='/'><img src="logo.png" alt="" className='h-10 mt-20 ml-4' /></Link>
      <div className='flex flex-row items-center justify-evenly w-1/4 h-10 mt-20 text-2xl'>
        <Link to='/' className='title-text'>Products</Link>
        <Link to='/about' className='title-text'>About</Link>
      </div>
    </div>
  )
}

export default Navbar