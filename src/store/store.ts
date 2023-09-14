import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherCard.slice"
import newWeatherReducer from "./weatherInfo.slice";

export const store = configureStore({
    reducer: {
        weatherCard: weatherReducer,
        newWeatherInfo: newWeatherReducer
    },
})