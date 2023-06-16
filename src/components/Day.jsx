const Day = (props) => {
  return (
    <div className="day">
      <p>{props.date}</p>
      <p>{props.temp}&deg;</p>
      <div>
        <i class="fa-solid fa-cloud"></i>
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
