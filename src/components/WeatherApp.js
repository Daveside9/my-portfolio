import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '5f71a9710dde40db4a572a3db6ff9c97'; // Replace with your valid API key

  const handleSearch = () => {
    if (city) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((response) => {
          setWeatherData(response.data);
          setError(null); // Clear any previous errors
        })
        .catch((err) => {
          if (err.response) {
            setError(`Error: ${err.response.data.message}`);
          } else if (err.request) {
            setError('Error: Unable to reach the weather service. Check your connection.');
          } else {
            setError('Error: Something went wrong.');
          }
          setWeatherData(null); // Clear previous data
        });
    }
  };

  return (
    <div className="weather-app">
      <label htmlFor="city-input">City Name:</label>
      <input
        id="city-input"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div className="weather-details">
          <h3>{weatherData.name}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>{Math.round(weatherData.main.temp)}°C</p>
        </div>
      )}

      <div className="github-link">
        <p>Visit my GitHub profile: </p>
        <a href="https://github.com/Daveside9/my-weather-forecast.git" target="_blank" rel="noopener noreferrer">
          @Daveside9
        </a>
      </div>
    </div>
  );
};

export default WeatherApp;
