import axios from "axios";
import {GoogleGeocodingAPIKey} from "../consts/apiKey";
import i18n from "../i18n";

export default class GeocodingAPI {
    static async reverseGeocoding(coordinates: {lat: number, lng: number}): Promise<{city: string, region: string} | null> {
        try {
            const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
                params: {
                    latlng: `${coordinates.lat}, ${coordinates.lng}`,
                    key: GoogleGeocodingAPIKey,
                    language: i18n.language
                }
            })

            const data = response.data;

            const addressComponents = data.results[0].address_components;
            let city, region;
            for (const component of addressComponents) {
                if (component.types.includes('locality')) {
                    city = component.long_name;
                } else if (component.types.includes('administrative_area_level_1')) {
                    region = component.long_name;
                }
            }
            return { city, region };
        }
        catch (e) {
            console.error("Error while trying to fetch geocoding data: ", e)
            return null
        }
    }
}