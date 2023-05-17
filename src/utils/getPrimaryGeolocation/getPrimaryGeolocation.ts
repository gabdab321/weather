import {Dispatch} from "react";
import {setLocation} from "../../redux/slices/locationSlice";
import defaultLocation from "../../consts/defaultLocation";

export default function getPrimaryGeolocation(dispatch: Dispatch<any>) {
    /* sets location if localstorage field 'location' is empty */
    if(!localStorage.getItem("location")) {
        /* checks is geolocation supported by browser */
        if(navigator.geolocation) {
            /* asks user's permission to use his geolocation */
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
        } else {
            /* sets default location if browser doesn't support geolocation */
            dispatch(setLocation(defaultLocation))
        }
    }

    /* if user allows to use his geolocation */
    function successCallback(position: GeolocationPosition) {
        /* sets user's geolocation */
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        /* dispatches changes into reducer */
        dispatch(setLocation({latitude, longitude}))
    }

    /* if user denies to use his geolocation */
    function errorCallback(error: GeolocationPositionError) {
        /* sets default location if user denied to give his geolocation */
        dispatch(setLocation(defaultLocation))
    }
}