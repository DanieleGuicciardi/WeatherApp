import React from "react";

import WeatherCard from "./cardCities";
import HomeMainBottom from './HomeMainBottom'

const CitiesMeteo = () => {
  return(
    <>
      <h2 style={{display: "flex", marginTop: "20px", fontWeight: "600", marginLeft: "5em" }}>⛅ Major Cities Weather Tracker:</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
        <WeatherCard city="Lido di Ostia"/>
        <WeatherCard city="New York"/>
        <WeatherCard city="Klaipeda"/>
        <WeatherCard city="London"/>
        <WeatherCard city="Tokyo"/>

        <HomeMainBottom/>
        
      </div>
    </>
  )
}

export default CitiesMeteo;
