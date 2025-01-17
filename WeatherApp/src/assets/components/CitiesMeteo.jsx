import React from "react";
import WeatherCard from "./cardCities";

const CitiesMeteo = () => {
  return(
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "50px" }}>
    <WeatherCard city="London"/>
    <WeatherCard city="New York"/>
    <WeatherCard city="Tokyo"/>
    <WeatherCard city="Paris"/>
  </div>
  )
}

export default CitiesMeteo;
