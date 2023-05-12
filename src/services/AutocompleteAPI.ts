import {IPlace, IPlaceResponse} from "../models/IPlace";
import {apiKey} from "../consts/apiKey";
import axios from "axios";

export default class AutocompleteAPI {
    /**
     * Gets autocomplete for the entered city or region.
     * @param text {String} - Query text.
     * @param lang {languages} - Preferable language of autocomplete.
     * @param [limit=5] {Number} - Defines amount of autocomplete objects
     * @returns {IPlace[] | null} - An array of autocompleted locations. Also returns null on errors or unsuccessful requests */
    static async placeAutocomplete(text: string,  lang: string, limit: number = 5): Promise<IPlace[] | null> {
        /* setting request options */
        const options = {
            method: 'GET',
            url: 'https://address-completion.p.rapidapi.com/v1/geocode/autocomplete',
            params: {
                text: text,
                limit: limit,
                lang: lang
            },
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'address-completion.p.rapidapi.com'
            }
        };

        try {
            /* requesting to the API */
            const response = await axios.request(options);

            /* returns null if response status isn`t successful */
            if(response.status !== 200) {
                return null
            }

            /* getting response data */
            const data: IPlaceResponse = await response.data

            return await data.features
        } catch (e) {
            /* returns null on error */
            return null
        }
    }
}