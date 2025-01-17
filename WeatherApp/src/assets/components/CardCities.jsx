import React, { useState, useEffect } from "react";

const WeatherCard = ({ city}) => {
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
          throw new Error("City not found");
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return <p>Loading weather for {city}...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.city}>{city}</h2>
      <p style={styles.temp}>{weatherData.main.temp}°C</p>
      <p style={styles.description}>
        {weatherData.weather[0].description.charAt(0).toUpperCase() +
          weatherData.weather[0].description.slice(1)}
      </p>
      <p style={styles.details}>Humidity: {weatherData.main.humidity}%</p>
      <p style={styles.details}>Wind: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    margin: "10px",
  },
  city: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  temp: {
    fontSize: "40px",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#007BFF",
  },
  description: {
    fontSize: "18px",
    fontStyle: "italic",
    margin: "10px 0",
  },
  details: {
    fontSize: "14px",
    margin: "5px 0",
    color: "#555",
  },
};

export default WeatherCard;
