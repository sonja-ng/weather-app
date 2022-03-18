import React, { useState } from 'react';
import DayForecast from './dayforecast';

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => setWeather(result));
    }
  }
  return (
    <div className="weather-app">
      <ul>
        <DayForecast />
      </ul>
    </div>
  );
}

export default App;
