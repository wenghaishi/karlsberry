import { useState } from 'react'
import RootPage from './components/RootPage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Error from './components/Error'
import Team from './components/Team'
import Shop from './components/Shop'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App
