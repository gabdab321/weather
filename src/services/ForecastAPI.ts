import axios from "axios";
import {IForecastFormatted, IForecastRaw} from "../models/IWeather";
import {formatResponse} from "../utils/formatResponse/formatResponse";


type coordinates = {latitude:number, longitude: number}
/* acceptable numbers of forecast days */
type forecastDays = 1 | 3 | 7 | 14 | 16

export default class ForecastAPI {
    /**
     * gets forecast for the selected location and amount of days.
     * @param coords {coordinates} - coordinates of the desired location.
     * @param [forecastDays=7] {forecastDays} - days of the wanted forecast.
     * @returns {IForecastFormatted | null} - already formatted forecast data. */
    static async getForecast(coords: coordinates, forecastDays: forecastDays = 7): Promise<IForecastFormatted | null> {
        const latitude = coords.latitude
        const longitude = coords.longitude

        /* url string that changes by the method params */
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,precipitation_probability,weathercode,cloudcover,uv_index,windspeed_10m,wind_direction_10m&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=${forecastDays}&timezone=auto`

        try {
            /* using axios to get response */
            const response = await axios.get(url)

            /* returns null if response status isn`t successful */
            if(response.status !== 200) {
                return null
            }

            /* gets raw forecast data */
            const data: IForecastRaw = await response.data

            /* returns formatted forecast data */
            return formatResponse(data)
        } catch (e) {
            console.error(e)
            return null
        }
    }
}