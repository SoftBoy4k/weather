import axios from 'axios';
import { initialWeatherData } from '../componets/Weather';

export interface IWeatherData {
  condition: string;
  temp: number;
  icon: string;
}

type Parts = { 
    parts: { 
        day: { 
            condition: string, 
            temp_avg: number, 
            icon: string 
        } 
    } 
}

export const fetchWeatherData = async (): Promise<[IWeatherData]> => {
    let weatherData: [IWeatherData]
    try {
        const response = await axios.get('http://localhost:8000/');

        weatherData = response.data.forecasts.map(({ parts }: Parts): IWeatherData => {
            return {
                condition: parts.day.condition,
                temp: parts.day.temp_avg,
                icon: parts.day.icon,
            };
        });
    } catch (error) {
        console.log(error);
        weatherData = initialWeatherData;
    }
    return weatherData;
};
