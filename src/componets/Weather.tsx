import WeatherBlock from './WeatherBlock'
import { startAnimation } from "./Animations/startAnimation";
import { useEffect, useState } from "react"
import { getSvg } from "./getSvg";
import { IWeatherData, fetchWeatherData } from '../api/fetchWeatherData';


interface WeatherProps {
    cardId: number
}
  
export const initialWeatherData: [IWeatherData] = [{
    condition: "clear",
    temp: 20,
    icon: getSvg("")
}]

export const Weather = ({cardId}: WeatherProps):JSX.Element => {

    const [weatherData, setWeatherData] = useState<[IWeatherData]>(initialWeatherData);

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchWeatherData();
          setWeatherData(data);
        };
    
        fetchData();
    }, []);
    

    useEffect(() => {
        startAnimation(weatherData[cardId].icon);
    }, [weatherData, cardId])

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
    <>
        <WeatherBlock condition={weatherData[cardId].condition} icon={weatherData[cardId].icon} temp={weatherData[cardId].temp}/>
    </>
  )
}