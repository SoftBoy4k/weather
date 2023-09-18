import WeatherBlock from './WeatherBlock'
import { startAnimation } from "./Animations/startAnimation";
import axios from "axios";
import { useEffect, useState } from "react"
import { getSvg } from "./getSvg";


interface WeatherProps {
    cardId: number
}

interface IWeatherData {
    condition: string,
    temp: number,
    icon: string
  }
  
const initialWeatherData: [IWeatherData] = [{
    condition: "clear",
    temp: 20,
    icon: getSvg("")
}]

export const Weather = ({cardId}: WeatherProps):JSX.Element => {

    const [weatherData, setWeatherData] = useState<[IWeatherData]>(initialWeatherData);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/');
                console.dir(response.data.forecasts[0].parts)
                console.dir(response.data.forecasts.map(({parts}: any):IWeatherData => {
                    return {
                        condition: parts.day.condition,
                        temp: parts.day.temp_avg,
                        icon: parts.day.icon
                    }
                }))
                setWeatherData(
                    response.data.forecasts.map(({parts}: any):IWeatherData => {
                        return {
                            condition: parts.day.condition,
                            temp: parts.day.temp_avg,
                            icon: parts.day.icon
                        }
                    })
                );
            } catch (error) {
                console.log(error);
            }
        };

        fetchWeatherData();
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