import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const handleChange = event => {
    setCity(event.target.value);
  };

  const handleSubmit = event => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?APPID=b5b5be990915bf18f851f86d73398368&units=metric&q=" +
          city
      )
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error(error);
        alert(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="city">City:</label>
        <input
          className="Input"
          type="text"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <button className="Button" onClick={handleSubmit}>
          Fetch
        </button>
        {weather && (
          <div>
            <div className="Text">Temperature: {weather.main.temp} C</div>
            <div className="Text">Humidity: {weather.main.humidity} %</div>
            <div className="Text">Wind speed: {weather.wind.speed} m/s</div>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
