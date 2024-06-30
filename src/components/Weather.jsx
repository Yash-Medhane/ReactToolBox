import React, { useState } from 'react';

const Weather = () => {
  const api = {
    key: "bcb62df34de91d9f9387459111df3d4c",
    base: "https://api.openweathermap.org/data/2.5/"
  };

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  };

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const getWeatherMessage = (weather) => {
    if (!weather.weather || !weather.weather[0]) return "";

    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("rain")) {
      return "There is a possibility of heavy rain. Stay dry!";
    } else if (main.includes("cloud")) {
      return "It's quite cloudy today. You might not need sunglasses.";
    } else if (main.includes("clear")) {
      return "The weather is clear. It's a great day to be outside!";
    } else if (main.includes("snow")) {
      return "Snowfall expected. Dress warmly!";
    } else if (main.includes("thunderstorm")) {
      return "Thunderstorms in the area. Stay safe!";
    } else {
      return "Have a nice day!";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
  <div className="w-full max-w-md p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">Weather App</h1>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 text-black rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={search}
      />
    </div>
    {(typeof weather.main != "undefined") ? (
      <div className="mt-6 p-4 bg-gray-800 bg-opacity-70 rounded shadow-lg text-center">
        <div className="text-2xl font-semibold">
          {weather.name}, {weather.sys.country}
        </div>
        <div className="my-2">
          {dateBuilder(new Date())}
        </div>
        <div className="text-5xl font-bold my-2">
          {Math.round(weather.main.temp)}°C
        </div>
        <div className="text-2xl my-2">
          {weather.weather[0].main}
        </div>
        <div className="text-lg my-2">
          {getWeatherMessage(weather)}
        </div>
      </div>
    ) : (
      <p className="text-center mt-6">No Data</p>
    )}
  </div>
</div>

  );
};

export default Weather;
