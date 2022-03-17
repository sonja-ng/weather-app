import React, { useState } from 'react';
import DayForecast from './dayforecast';
const api = {
  key: "17d39ff02ef7396e173f232eed2daeef",
  base: "http://api.openweathermap.org/data/2.5/"
}

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
