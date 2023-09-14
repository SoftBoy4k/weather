import { useSelector } from "react-redux";
import { IStateCard } from "../store/weatherCard.slice";


const Header = () => {

  const card: number = useSelector((state: IStateCard) => state.weatherCard.card);

  const getCurrentDate = (cardId: number) => {
    const date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * cardId);
    const day = date.getDate();
    const month = getCurrentMonth(date.getMonth());
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  const getCurrentMonth = (month: number) => {
    const currentMonth: number = month + 1;
    return currentMonth < 10 ? `0${currentMonth}` : currentMonth;
  }

  const getCurrentDayOfTheWeek = (cardId: number): string => {
    const date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * cardId);
    const dayOfTheWeek = date.getDay();
    switch (dayOfTheWeek) {
      case 0:
        return "Sunday"
      case 1:
        return "Monday"
      case 2:
        return "Tuesday"
      case 3:
        return "Wednesday"
      case 4:
        return "Thursday"
      case 5:
        return "Friday"
      case 6:
        return "Saturday"
      default:
        return ""
    }
  }

  const getDay = (cardId:number):string => {
    switch (cardId) {
      case 0:
        return "Today";
      case 1:
        return "Tomorrow";
      default:
        return getCurrentDayOfTheWeek(card);
    }
  }

  return (
    <div className="header">
        <h2 className="header__day">{getDay(card)}</h2>
        <p className="header__date">{getCurrentDate(card)}</p>
    </div>
  )
}

export default Header