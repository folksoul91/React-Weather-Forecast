import weatherData from "./components/weatherData";

const WeatherIcon = () => {
  return (
    <section>
      {weatherData.map((ele, index) => (
        <div key={index} className="weather">
          <img src={ele.img} alt="..." />
        </div>
      ))}
    </section>
  );
};

export default WeatherIcon;
