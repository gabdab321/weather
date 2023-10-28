import axios from "axios";
import {IPAddressAPIKey} from "../consts/apiKey";
import defaultLocation from "../consts/defaultLocation";

/* used for defining user`s primary geolocation */
export default class IPAddressAPI {
    static async getLocationByIP(): Promise<{latitude: number, longitude: number, city: string, region: string}> {
        const response  = await axios.get(`https://ipinfo.io?token=${IPAddressAPIKey}`)

        /* returns default location on wrong status and logs out error */
        if(response.status != 200) {
            console.error(`[${response.status}] - ${response.statusText}`)
            return defaultLocation
        }

        return {
            latitude: +response.data.loc.split(",")[0],
            longitude: +response.data.loc.split(",")[0],
            city: response.data.city,
            region: response.data.region
        }
    }
}