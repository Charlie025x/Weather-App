import "./App.css";
import { edinburgWeather } from "./call";

import Day from "./components/Day";

function App() {
  /* filters data to show 1 weather report per day */

  const dailyWeather = edinburgWeather.list.filter(function (
    value,
    index,
    Arr
  ) {
    return index % 8 === 0;
  });

  /* ********************************************** */

  /* filters data to hourly weather report */
  const hourlyWeather = edinburgWeather.list.slice(1).filter(function (_, i) {
    return (i + 1) % 8;
  });

  /* ********************************************** */

  return (
    <div className="App">
      <header>
        <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
        <i className="fa-solid fa-location-arrow"></i>Edinburg, TX
        <i className="fa-solid fa-user"></i>
      </header>
      <section>
        <div className="weather-forcast">
          <div className="forcast-heading">
            <h2>5 day weather</h2>
          </div>

          {dailyWeather.map((data) => {
            return (
              <Day
                key={data.dt}
                date={data.dt_txt}
                temp={data.main.temp}
                weatherDesc={data.weather[0].description}
                wind={data.wind.speed}
                main={data.weather[0].main}
                hourly={hourlyWeather}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
