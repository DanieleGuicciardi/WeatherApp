import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  // Funzione per calcolare l'ora locale usando il timezone
  const getLocalTime = () => {
    const date = new Date();
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + timezone * 1000);
    return localTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Funzione per calcolare la direzione del vento
  const getWindDirection = (deg) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Weather in {name}</h1>
        <div style={styles.card}>
          {/* Icona meteo */}
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
            style={styles.icon}
          />

          {/* Informazioni sul meteo */}
          <div>
            <p style={styles.temp}>{main.temp}°C</p>
            <p style={styles.description}>
              {weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}
            </p>
          </div>
        </div>

        {/* Dettagli extra */}
        <div style={styles.details}>
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

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "10px",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
    width: "350px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#333",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9f9f9",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "15px",
  },
  icon: {
    width: "70px",
    height: "70px",
    marginRight: "10px",
  },
  temp: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#007BFF",
  },
  description: {
    fontSize: "14px",
    fontStyle: "italic",
    color: "#555",
  },
  details: {
    textAlign: "left",
    marginTop: "5px",
    fontSize: "12px",
    color: "#555",
  },
};

export default CityWeather;
