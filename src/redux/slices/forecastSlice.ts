import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForecastFormatted} from "../../models/IWeather";

interface forecastState {
    forecast: IForecastFormatted | null
}

/* localstorage data */
const initialState: forecastState = {
    forecast: null
}

const forecastSlice = createSlice({
    name: "forecastSlice",
    initialState: initialState,
    reducers: {
        setForecast(state: forecastState, action: PayloadAction<IForecastFormatted>) {
            state.forecast = action.payload;
        }
    }
})

export const forecastReducer = forecastSlice.reducer
export const {setForecast} = forecastSlice.actions