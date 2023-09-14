import { createSlice } from "@reduxjs/toolkit";

export interface IStateCard { 
    weatherCard: {
      card: number
    }
}


const weatherCardSlice = createSlice({
    name: 'weatherCard',
    initialState: {
        card: 0
    },
    reducers: {
        nextCard(state, action) {
            state.card += 1;
        },
        prevCard(state, action) {
            state.card -= 1;
        }
    },
})

export const {nextCard, prevCard} = weatherCardSlice.actions;

export default weatherCardSlice.reducer;