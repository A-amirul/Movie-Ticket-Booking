import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'

function App() {
  const [watchTime, setWatchTime] = useState(0);
  const handleWatchTime = (time) => {
    // age theke watchTime set kora ache naki seta dekhar jonno
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    if (previousWatchTime) {
      // jodi thake tahole ager time er sathe bortoman time add korbo
      const updateTime = previousWatchTime + time;
      localStorage.setItem('watchTime', updateTime);
      setWatchTime(updateTime);
    }
    else {
      // jodi na thake time take set korbo
      localStorage.setItem('watchTime', time);
      setWatchTime(time);
    }
  }
  return (
    <div className="App">
      <div className='main row gap-4'>
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart-container card col-md-3">
          <SideCart
            watchTime={watchTime}
          ></SideCart>

        </div>
      </div>
    </div>
  )
}

export default App
