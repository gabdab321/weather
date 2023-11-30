import {configureStore} from "@reduxjs/toolkit";
import {locationReducer} from "./slices/locationSlice";
import {forecastReducer} from "./slices/forecastSlice";

const store = configureStore({
    devTools: true,
    reducer: {
        location: locationReducer,
        forecast: forecastReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch