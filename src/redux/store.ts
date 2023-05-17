import {configureStore} from "@reduxjs/toolkit";
import {locationReducer} from "./slices/locationSlice";

const store = configureStore({
    devTools: true,
    reducer: {
        location: locationReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch