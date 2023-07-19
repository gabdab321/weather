import {IPlace} from "../../models/IPlace";

export function formatPlace(place: IPlace): string {
    /* defining place properties variables */
    const city = place.properties.city
    const state = place.properties.state
    const country = place.properties.country

    /* filters any undefined values in an array, and then joins it */
    return [city, state, country].filter(item => item !== undefined).join(", ")
}