import { useState } from "react";

const Day = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <div className="day">
      <div className="day-header">
        <p>{props.date.slice(0, -9)}</p>
        <p>{props.temp}&deg;</p>
        <div>
          <i
            className={`fa-solid ${
              props.main === "Clouds"
                ? "fa-cloud"
                : props.main === "Rain"
                ? "fa-cloud-showers-heavy"
                : "fa-sun"
            }`}
          ></i>
          <p>{props.weatherDesc}</p>
        </div>
        <div>
          <i className="fa-solid fa-wind"></i>
          <p>{props.wind} mph</p>
        </div>
        <i className="fa-solid fa-chevron-down" onClick={handleClick}></i>
      </div>
      {/* hour feature postponed */}
      {/* {isActive && (
        <div className="day-content">
          <div className="hourly">
            <p>{props.hourly[0].dt_txt.slice(11)}</p>
            <p>{props.hourly[0].main.temp}&deg;</p>
            <div>
              <i
                className={`fa-solid ${
                  props.hourly[0].weather.main === "Clouds"
                    ? "fa-cloud"
                    : props.hourly[0].weather.main === "Rain"
                    ? "fa-cloud-showers-heavy"
                    : "fa-sun"
                }`}
              ></i>
              <p>{props.weatherDesc}</p>
            </div>
            <div>
              <i className="fa-solid fa-wind"></i>
              <p>{props.hourly[0].wind.speed} mph</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Day;
