import weatherData from "./components/weatherData";

const WeatherForecast = () => {
  return (
    <section>
      {weatherData.map((ele, index) => (
        <div key={index} className="weather">
          <img src={ele.img} alt="..." />
          <p>
            <span>conditions: </span>
            {ele.conditions}
          </p>
          <p>
            <span>time: </span>
            {ele.time}
          </p>
        </div>
      ))}
    </section>
  );
};

export default WeatherForecast;
