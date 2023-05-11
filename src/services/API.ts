import axios from "axios";
import {IForecastFormatted, IForecastRaw} from "../models/IWeather";
import {formatResponse} from "../utils/formatResponse/formatResponse";

/* acceptable numbers of forecast days */
type forecastDays = 1 | 3 | 7 | 14 | 16

export default class API {
    /**
     * gets forecast for the selected location and amount of days.
     * @param latitude {Number} - latitude of the desired location.
     * @param longitude {Number} - longitude of the desired location.
     * @param [forecastDays=7] {forecastDays} - days of the wanted forecast.
     * @returns {IForecastFormatted | null} - already formatted forecast data. */
    static async getForecast(latitude: number, longitude: number, forecastDays: forecastDays = 7): Promise<IForecastFormatted | null> {
        /* url string that changes by the method params */
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,weathercode,cloudcover,windspeed_10m&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=${forecastDays}&timezone=auto`
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
    }
}