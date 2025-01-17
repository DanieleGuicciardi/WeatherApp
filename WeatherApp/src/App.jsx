import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WeatherNavbar from './assets/components/Navbar'
import WeatherFooter from './assets/components/Footer'
import CitiesMeteo from './assets/components/HomeMain'
import CityWeather from './assets/components/CityWeather'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <WeatherNavbar/>

      <Routes>
        <Route path="/" element={<CitiesMeteo />}/>
        <Route path="/weather/:city" element={<CityWeather />} />
      </Routes>

      <WeatherFooter/>
    </Router>
  );
}

export default App
