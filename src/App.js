import logo from './logo.svg';
import './App.css';

function getWeather(e){
  e.preventDefault();
  console.log(document.getElementById('search-input').value);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('search-input').value}&appid=b4d5c187708e4311c8c26496913cc8e0`) // ${city}
  .then(res => res.json()).then(
    (result) => {
      document.getElementById('temp-value').textContent = Math.round(result['main']['feels_like'] - 273);
      let id = result['weather']['id'];
      if(id<300 && id>200)
            {
              document.getElementById('temp-icon').src="./thunderstorm.svg"
            }
            else if(id<400 && id>300)
            {
              document.getElementById('temp-icon').src="./cloud-solid.svg"
            }
            else if(id<600 && id>500)
            {
              document.getElementById('temp-icon').src="./rain.svg"
            }
            else if(id<700 && id>600)
            {
              document.getElementById('temp-icon').src="./snow.svg"
            }
            else if(id<800 && id>700)
            {
              document.getElementById('temp-icon').src="./clouds.svg"
            }
            else
            {
              document.getElementById('temp-icon').src="./cloud-and-sun.svg"
            }
    }
  )
  console.log(document.getElementById('temp-icon'));
}

function App() {
  return (
    <div className="App">
      <main id="app-container">
            <div id="location">
                <p>--------</p>
                </div>
                <div id="temp">
                    <img id="temp-icon" src="./sun.svg" alt="" />
                    <p><span id="temp-value">_______</span><span id="temp-unit">&deg;c</span></p>
                </div>

                <div id="climate">
                    <p>_________</p>
                </div>
        </main>

        <form id="search-form">
            <input type="search"
            placeholder="Enter City Name"
            id="search-input"
            required
            autoComplete="off"
            />
            <br />
            <button id="search-button" onClick={getWeather}>Search</button>
        </form>
    </div>
  );
}

export default App;
