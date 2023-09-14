import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherCard.slice"

export const store = configureStore({
    reducer: {
        weatherCard: weatherReducer
    },
})