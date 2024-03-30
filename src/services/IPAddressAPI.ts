import axios from "axios";
import {IPAddressAPIKey} from "../consts/apiKey";
import defaultLocation from "../consts/defaultLocation";
import {locationState} from "../redux/slices/locationSlice";
import GeocodingAPI from "./GeocodingAPI";

/* used for defining user`s primary geolocation */
export default class IPAddressAPI {
    static async getLocationByIP(): Promise<locationState | null> {
        try {
            const response  = await axios.get(`https://ipinfo.io?token=${IPAddressAPIKey}`)

            /* returns default location on wrong status and logs out error */
            if(response.status != 200) {
                console.error(`[${response.status}] - ${response.statusText}`)
                return defaultLocation
            }

            const location = {
                lat: +response.data.loc.split(",")[0],
                lng: +response.data.loc.split(",")[1],
            }

            const geocodingResult = await GeocodingAPI.reverseGeocoding(location)

            // if geocoding gave some results on this location, returns object with geocoded data(much better than data provided by IP api)
            if(geocodingResult) {
                return {
                    position: location,
                    city: geocodingResult.city,
                    region: geocodingResult.region
                }
            }

            // if geocoding returned null
            return {
                position: location,
                city: response.data.city,
                region: response.data.region
            }
        } catch (e) {
            console.error(e)
            return null
        }
    }
}