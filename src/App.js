import "./styles.css";
import WeatherForecast from "./weatherForecast";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <WeatherForecast />
      <WeatherIcon />
      <WeatherData />
    </div>
  );
}

export default App;
