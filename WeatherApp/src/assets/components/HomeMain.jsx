import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import WeatherCard from "./CardCities";
import HomeMainBottom from './HomeMainBottom';

const CitiesMeteo = () => {    //codice preso dalla documentazione di leaflet

  useEffect(() => {
    const map = L.map("map").setView([41.9028, 12.4964], 5); // Ho scelto Roma per mancanza di tempo ma avrei potuto prendere la lat e la lon dal click di una card (forse)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([41.9028, 12.4964]).addTo(map)
      .bindPopup("Rome, Italy")
      .openPopup();

    return () => {
      map.remove(); 
    };
  }, []);

  return (
    <>
      <h2 style={{ display: "flex", marginTop: "20px", fontWeight: "600", marginLeft: "5em" }}>⛅ Major Cities Weather Tracker:</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
        <WeatherCard city="Lido di Ostia" />
        <WeatherCard city="New York" />
        <WeatherCard city="Klaipeda" />
        <WeatherCard city="London" />
        <WeatherCard city="Tokyo" />
      </div>

      <div id="map" style={{ height: "100%", margin: "20px auto", width: "78%" }}></div>

      <HomeMainBottom />
    </>
  );
};

export default CitiesMeteo;
