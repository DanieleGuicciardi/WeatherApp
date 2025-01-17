import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/cityWeather.css"; 

const CityWeather = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=453812c543bba48d83b797bb1887b8cc&units=metric`
        );
        if (!response.ok) {
          throw new Error("City not found (or check API 😉 )");
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading weather for {city}...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  const { name, main, weather, wind, timezone, visibility } = weatherData;

  const getLocalTime = () => {
    const date = new Date();
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + timezone * 1000);
    return localTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  
  const getWindDirection = (deg) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  };

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <h1 className="title">Weather in {name}</h1>
        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
            className="icon"
          />

          <div>
            <p className="temp">{main.temp}°C</p>
            <p className="description">
              {weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}
            </p>
          </div>
        </div>

        <div className="details">
          <p><strong>Local Time:</strong> {getLocalTime()}</p>
          <p><strong>Min Temp:</strong> {main.temp_min}°C</p>
          <p><strong>Max Temp:</strong> {main.temp_max}°C</p>
          <p><strong>Humidity:</strong> {main.humidity}%</p>
          <p><strong>Pressure:</strong> {main.pressure} hPa</p>
          <p><strong>Visibility:</strong> {visibility / 1000} km</p>
          <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
          <p><strong>Wind Direction:</strong> {getWindDirection(wind.deg)} ({wind.deg}°)</p>
          <p><strong>Timezone (UTC):</strong> {timezone / 3600 > 0 ? `+${timezone / 3600}` : timezone / 3600}</p>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
