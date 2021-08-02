import logo from './logo.svg';
import './App.css';
import REACT_APP_API_URL from './api/key'
import REACT_APP_API_KEY from './api/key'

const Api = {
  key: REACT_APP_API_KEY,
  base: REACT_APP_API_URL
}

function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type='text'
            className='search-bar'
            placeholder='search'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
