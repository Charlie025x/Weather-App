const Day = (props) => {
  return (
    <div className="day">
      <p>{props.date.slice(0, -9)}</p>
      <p>{props.temp}&deg;</p>
      <div>
        <i
          class={`fa-solid ${
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
        <i class="fa-solid fa-wind"></i>
        <p>{props.wind} mph</p>
      </div>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  );
};

export default Day;
