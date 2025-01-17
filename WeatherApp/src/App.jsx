import { useState } from 'react'
import './App.css'

import WeatherNavbar from './assets/components/Navbar'
import WeatherFooter from './assets/components/Footer'
import CitiesMeteo from './assets/components/CitiesMeteo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherNavbar/>
      <CitiesMeteo/>
      <WeatherFooter/>
    </>
  )
}

export default App
