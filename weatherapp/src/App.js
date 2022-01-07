import './App.css';
import { useState } from 'react'




const Api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})



  const search = async (event) => {
    if (event.key === "Enter") {
      await fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('')
        });
    }
  }


  const dateBuilder = (d) => {
    let months = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    console.log(days)

    return `${day}  ${month} ${date} ${year}`
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp * 9 / 5 + 32 > 50) ? 'App warm' : 'App') : 'App'}>
      <main>
        <div className='search-box'>
          <input type='text'
            className='search-bar'
            placeholder='search'
            onChange={event => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main !== 'undefined') ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp * 9 / 5 + 32)}°F
              </div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
            <div className='humidity'>{weather.main.humidity}% Humidity</div>
            <div className='sunrise'>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className='sunset'>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App
