import { useState } from 'react'
import RootPage from './components/RootPage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Error from './components/Error'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App
