import NextWeatherBlock from "./NextWeatherBlock"
import WeatherBlock from "./WeatherBlock"
import { useDispatch, useSelector } from "react-redux"
import type { Dispatch } from 'redux'
import { IStateCard, nextCard, prevCard } from "../store/weatherCard.slice"

const MenuWeather = () => {

  const card: number = useSelector((state: IStateCard) => state.weatherCard.card);

  const dispatch: Dispatch = useDispatch();

  const prevWeatherCard = () => {dispatch(prevCard(""))}

  const nextWeatherCard = () => {dispatch(nextCard(""))}

  return (
    <div className="weather-menu">
        <NextWeatherBlock direction='left' hidden={card === 0} clickHandler = {prevWeatherCard}/>
        <WeatherBlock id={card}/>
        <NextWeatherBlock direction='right'hidden={card === 6} clickHandler = {nextWeatherCard}/>
    </div>
  )
}

export default MenuWeather