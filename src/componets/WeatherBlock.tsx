import { getSvg } from "./getSvg";


interface WeatherBlockProps {
  condition: string,
  icon: string,
  temp: number
}

const WeatherBlock = ({condition, icon, temp}: WeatherBlockProps) => {

  return (
    <div className="weather-block">
        <p className="weather-block__weather">{condition}</p>
        <img className="weather-block__img" src={getSvg(icon)}/>
        <p className="weather-block__place">Gomel</p>
        <p className="weather-block__temperature">{temp} С°</p>
    </div>
  )
}

export default WeatherBlock