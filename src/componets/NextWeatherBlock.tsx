
interface NextWeatherBlockProps {
    direction: string,
    hidden: boolean,
    clickHandler: () => void,
}


const NextWeatherBlock = ({direction, hidden, clickHandler}: NextWeatherBlockProps) => {
    return (
        <div className={hidden ? "next-weather-block hidden" : "next-weather-block"} onClick={clickHandler}>
            { 
            (direction === "right" || direction === "left") && 
            <img className={"next-weather-block__arrow next-weather-block__arrow__" + direction} src="https://cdn-icons-png.flaticon.com/128/271/271228.png"/>
            }
        </div>
    )
}

export default NextWeatherBlock