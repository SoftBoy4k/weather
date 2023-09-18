import NextWeatherBlock from "./NextWeatherBlock"
import { useDispatch, useSelector } from "react-redux"
import type { Dispatch } from 'redux'
import { IStateCard, nextCard, prevCard } from "../store/weatherCard.slice"
import { Weather } from "./Weather"

const MenuWeather = () => {

  const cardId: number = useSelector((state: IStateCard) => state.weatherCard.card);

  const dispatch: Dispatch = useDispatch();

  const prevWeatherCard = () => {dispatch(prevCard(""))}

  const nextWeatherCard = () => {dispatch(nextCard(""))}

  return (
    <div className="weather-menu">
        <NextWeatherBlock direction='left' hidden={cardId === 0} clickHandler = {prevWeatherCard}/>
        <Weather cardId={cardId}/>
        <NextWeatherBlock direction='right'hidden={cardId === 6} clickHandler = {nextWeatherCard}/>
    </div>
  )
}

export default MenuWeather