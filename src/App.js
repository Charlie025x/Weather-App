import "./App.css";
// import { edinburgWeather } from "./call";
import { useState } from "react";

import Day from "./components/Day";

function App() {
  /* filters data to show 1 weather report per day */

  // const dailyWeather = edinburgWeather.list.filter(function (
  //   value,
  //   index,
  //   Arr
  // ) {
  //   return index % 8 === 0;
  // });

  /* ********************************************** */

  // const getDailyWeather = (e) => {
  //   e.list.filter(function (value, index, Arr) {
  //     return index % 8 === 0;
  //   });
  // };

  /* filters data to hourly weather report */
  // const hourlyWeather = edinburgWeather.list.slice(1).filter(function (_, i) {
  //   return (i + 1) % 8;
  // });

  /* ********************************************** */

  const [inputValue, setInputValue] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const [dailyWeather, setDailyWeather] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputValue);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${inputValue}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        console.log(data);

        setDailyWeather(
          data.list.filter(function (value, index, Arr) {
            return index % 8 === 0;
          })
        );
      });
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setInputValue(inputValue);
  };

  return (
    <div className="App">
      <header className="">
        <p>Get a free 5 day Weather Report! Enter your zip code to begin.</p>
        <div className="header-bottom">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ZIP code"
              onChange={handleInputChange}
              value={inputValue}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
            </button>
          </form>
          <p>
            <i className="fa-solid fa-location-arrow"></i>{" "}
            {weatherData ? weatherData.city.name : ""}
          </p>
        </div>
      </header>
      <section>
        <div className="weather-forcast">
          <div className="forcast-heading">
            <h2>5 day weather forcast</h2>
          </div>

          {weatherData != null
            ? dailyWeather.map((data) => {
                return <Day data={data} key={data.dt} />;
              })
            : ""}

          {/* {dailyWeather.map((data) => {
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
          })} */}
        </div>
      </section>
    </div>
  );
}

export default App;
