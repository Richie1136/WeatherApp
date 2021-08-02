import logo from './logo.svg';
import './App.css';
import REACT_APP_API_URL from './api/key'
import REACT_APP_API_KEY from './api/key'
import { useState } from 'react'

const Api = {
  key: REACT_APP_API_KEY,
  base: REACT_APP_API_URL
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('')
          console.log(result)
        })
    }
  }


  const dateBuilder = (d) => {
    let months = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day}  ${month} ${date} ${year}`
  }
  return (
    <div className={
      (typeof weather.main !== 'undefined')
        ? ((weather.main.temp > 50)
          ? 'App warm'
          : 'App')
        : 'App'}>
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
                {Math.random(weather.main.temp)}°F
              </div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div >
  );
}

export default App;
