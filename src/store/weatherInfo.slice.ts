import { createSlice } from "@reduxjs/toolkit";

export interface IWeatherInfo { 
    weatherInfo: {
        temp: number,
        condition: string,
    }
}

const initialState = {
    temp: 30,
    condition: "cloudy",
}


const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState: initialState,
    reducers: {
        newWeatherInfo(state, action): void {
            state.temp = action.payload;
            state.condition = action.payload;
        }
    },
})

export const {newWeatherInfo} = weatherInfoSlice.actions;

export default weatherInfoSlice.reducer;