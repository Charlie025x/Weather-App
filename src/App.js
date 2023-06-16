import "./App.css";
import { edinburgWeather } from "./call";

import Day from "./components/Day";

function App() {
  /* filters data to show 1 weather report per day */

  const filteredArr = edinburgWeather.list.filter(function (value, index, Arr) {
    return index % 8 === 0;
  });

  /* ********************************************** */

  return (
    <div className="App">
      <header>
        <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
        <i class="fa-solid fa-location-arrow"></i>Edinburg, TX
        <i class="fa-solid fa-user"></i>
      </header>
      <section>
        <div className="weather-forcast">
          <div className="forcast-heading">
            <h2>5 day weather</h2>
          </div>

          {filteredArr.map((data) => {
            return (
              <Day
                date={data.dt_txt}
                temp={data.main.temp}
                weatherDesc={data.weather[0].description}
                wind={data.wind.speed}
                main={data.weather[0].main}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
