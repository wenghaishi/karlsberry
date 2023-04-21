import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Logo from './Logo';


const Navbar = () => {
  return (
    <div className='w-full h-24 flex fixed flex-row justify-between px-6  z-20 items-center bg-inherit'>
      {/* <Link to='/'><img src="logo.png" alt="" className='h-10  ml-4' /></Link> */}
      <Link to="/"><Logo /></Link>
      <div className='flex flex-row items-center justify-evenly w-1/4 h-10 text-2xl'>
        <Link to='/' className='title-text'>Products</Link>
        <Link to='/about' className='title-text'>About</Link>
      </div>
    </div>
  )
}

export default Navbar