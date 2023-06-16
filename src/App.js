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
          {/* {edinburgWeather.list.map((data) => {
            return <p>{data.dt_txt}</p>;
          })}
          {edinburgWeather.list[0].dt_txt} */}
          {filteredArr.map((data) => {
            return <p>{data.dt_txt}</p>;
          })}

          <Day />
          {/* filters data to show 1 weather report per day */}
          {edinburgWeather.list
            .filter(function (value, index, Arr) {
              return index % 8 === 0;
            })
            .map((data) => {
              return <p>{data.dt_txt}</p>;
            })}
          {/* ********************************************** */}
        </div>
      </section>
    </div>
  );
}

export default App;
