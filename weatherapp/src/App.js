import logo from './logo.svg';
import './App.css';
import REACT_APP_API_URL from './api/key'
import REACT_APP_API_KEY from './api/key'

const Api = {
  key: REACT_APP_API_KEY,
  base: REACT_APP_API_URL
}

function App() {
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
    <div className="App">
      <main>
        <div className='search-box'>
          <input type='text'
            className='search-bar'
            placeholder='search'
          />
        </div>
        <div className='location-box'>
          <div className='location'>Long Island, NY, US</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            70°F
          </div>
          <div className='weather'>
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
