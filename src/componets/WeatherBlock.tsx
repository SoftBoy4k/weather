import axios from "axios";
import { useEffect, useState } from "react"
import { getSvg } from "./getSvg";


interface WeatherBlockProps {
  id: number
}

interface IWeatherData {
  condition: string,
  temp: number,
  icon: string
}

const initialWeatherData: IWeatherData = {
  condition: "clear",
  temp: 20,
  icon: getSvg("")
}

const WeatherBlock = ({id}: WeatherBlockProps) => {

  const [weatherData, setWeatherData] = useState<IWeatherData>(initialWeatherData);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/');
        setWeatherData({
          condition: response.data.forecasts[id].parts.day.condition,
          temp: response.data.forecasts[id].parts.day.temp_avg,
          icon: response.data.forecasts[id].parts.day.icon
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, [id]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-block">
        <p className="weather-block__weather">{weatherData.condition}</p>
        <img className="weather-block__img" src={getSvg(weatherData.icon)}/>
        <p className="weather-block__place">Gomel</p>
        <p className="weather-block__temperature">{weatherData.temp} С°</p>
    </div>
  )
}

export default WeatherBlock