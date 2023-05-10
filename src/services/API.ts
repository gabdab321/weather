import axios from "axios";
import {IForecastFormatted, IForecastRaw} from "../models/IWeather";
import {formatResponse} from "../utils/formatResponse/formatResponse";

type forecastDays = 1 | 3 | 7 | 14 | 16

export default class API {
    static async getForecast(latitude: number, longitude: number, forecastDays: forecastDays = 7): Promise<IForecastFormatted | null> {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,weathercode,cloudcover,windspeed_10m&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=${forecastDays}&timezone=auto`
        const response = await axios.get(url)

        if(response.status !== 200) {
                return null
        }

        const data: IForecastRaw = await response.data

        return formatResponse(data)
    }
}