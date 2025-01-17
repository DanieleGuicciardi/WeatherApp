import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CityWeather = () => {
  const { city } = useParams(); // Ottieni il nome della città dalla URL
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=453812c543bba48d83b797bb1887b8cc&units=metric`
        );
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [city]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!weatherData) {
    return <p>Loading weather for {city}...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather in {weatherData.name}</h1>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default CityWeather;
