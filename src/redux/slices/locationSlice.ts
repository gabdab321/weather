import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import defaultLocation from "../../consts/defaultLocation";

interface locationState {
    latitude: number,
    longitude: number,
    city: string,
    region: string
}

/* localstorage data */
const localStorageLocation = localStorage.getItem("location")

/* sets parsed localStorageLocation if it isn't null. if it is, then sets default coords */
const location: locationState = localStorageLocation ? JSON.parse(localStorageLocation) : defaultLocation

const initialState: locationState = {...location}

const locationSlice = createSlice({
    name: "locationSlice",
    initialState: initialState,
    reducers: {
        setLocation(state: locationState, action: PayloadAction<locationState>) {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
            state.city = action.payload.city;
            state.region = action.payload.region;

            /* sets new location into localstorage */
            localStorage.setItem("location", JSON.stringify(state))
        }
    }
})

export const locationReducer = locationSlice.reducer
export const {setLocation} = locationSlice.actions