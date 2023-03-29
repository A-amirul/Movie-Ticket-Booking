import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'

function App() {
  const handleWatchTime = (time) => {
    console.log(time);
  }
  return (
    <div className="App">
      <div className='main row gap-4'>
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart-container card col-md-3 bg-secondary">
          <SideCart></SideCart>

        </div>
      </div>
    </div>
  )
}

export default App
