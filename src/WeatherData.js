import weatherData from "./components/weatherData";

const WeatherData = () => {
  return (
    <section>
      {weatherData.map((ele, index) => (
        <div key={index} className="weather">
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

export default WeatherData;
