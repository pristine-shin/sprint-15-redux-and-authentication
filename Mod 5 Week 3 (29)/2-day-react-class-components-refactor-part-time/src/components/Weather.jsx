import React from 'react';
import { toQueryString } from '../utils';
import { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);

    useEffect(() => {
      navigator.geolocation?.getCurrentPosition(
        pollWeather,
        (err) => console.log(err),
        { timeout: 10000 }
      );
    }, [])

    const pollWeather = async (location) => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?';

      /* Remember that it's unsafe to expose your API key. (Note that pushing
      files that include your key to Github will expose your key!) In
      production, you would definitely save your key in an environment variable,
      so do that here. Since this project runs in your local environment
      (localhost), save your key as an environment variable in a .env file in
      the root directory of your app. You can then access the key here as
      "process.env.<variable_name>". Make sure to .gitignore your .env file!
      Also remember to restart your server (i.e., re-run "npm run dev") whenever
      you change your .env file. */
      const apiKey = import.meta.env.VITE_WEATHER_API;

      const params = {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        appid: apiKey
      };

      url += toQueryString(params);

      const res = await fetch(url);
      if (res.ok) {
        const weather = await res.json();
        setWeather(weather);
      }
      else {
        alert ("Check Weather API key!")
      }
    }

    const currWeather = weather;
    let content = <div className='loading'>loading weather...</div>;

    if (currWeather) {
      const temp = (currWeather.main.temp - 273.15) * 1.8 + 32;
      content = (
        <div>
          <p>{currWeather.name}</p>
          <p>{temp.toFixed(1)} degrees</p>
        </div>
      );
    }
    else {
      content = (
        <div>
          Weather is currently unavailable. (Are Location Services enabled?)
        </div>
      )
    }

    return (
      <section className="weather-section">
        <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
      </section>
    );

}

export default Weather;
