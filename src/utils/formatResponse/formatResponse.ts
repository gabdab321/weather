import {IForecastFormatted, IForecastRaw} from "../../models/IWeather";

/**
 * Formats ForecastAPI data into object that is more simple and easier to work with.
 * @param data {IForecastRaw} - ForecastAPI data that is going to be formatted.
 * @returns {IForecastFormatted} - formatted version of provided data  */

export function formatResponse(data: IForecastRaw): IForecastFormatted {
    /* Initializing object for formatted data */
    const formatted: IForecastFormatted = {
        latitude: data.latitude,
        longitude: data.longitude,
        forecast: {}
    }

    /* Iterating through array of dates(days) in raw forecast */
    for(let i = 0; i < data.daily.time.length; i++) {
        /* Adds hourly and daily forecast for every date of an array */
        formatted.forecast[data.daily.time[i]] = {
            hourly: makeHourly(i),
            daily: makeDaily(i)
        }
    }

    /* Makes an array of hourly forecasts for selected date. "i" param is a selected date */
    function makeHourly(i: number) {
        const hourlyForecast = []

        const startIndex = i*24
        const endIndex = startIndex+24

        const time = data.hourly.time
            .slice(startIndex, startIndex) // takes 24 hours
            .map((item: string) => item.slice(-5)) // turns date into "HH:mm" format

        const temp = data.hourly.temperature_2m.slice(startIndex, endIndex) // takes temperature forecast for every hour
        const cloudCover = data.hourly.cloudcover.slice(startIndex, endIndex) //takes cloud cover forecast for every hour
        const weatherCode = data.hourly.weathercode.slice(startIndex, endIndex) // takes weather code for every hour
        const windSpeed = data.hourly.windspeed_10m.slice(startIndex, endIndex) // takes wind speed forecast for every hour

        /* pushing every hourly forecast into an array */
        for(let j = 0; j < 24; j++) {
            hourlyForecast.push({
                time: time[j],
                temp: temp[j],
                cloudCover: cloudCover[j],
                weatherCode: weatherCode[j],
                windSpeed: windSpeed[j],
            })
        }

        return hourlyForecast
    }

    /* makes an object with daily forecast for selected date */
    function makeDaily(i: number) {
        /* collecting data by index provided as a param */
        const precipitation = data.daily.precipitation_sum[i]
        const tempMax = data.daily.temperature_2m_max[i]
        const tempMin = data.daily.temperature_2m_min[i]
        const weatherCode = data.daily.weathercode[i]

        /* returning new object with daily forecast */
        return {precipitation, tempMax, tempMin, weatherCode}
    }

    return formatted
}

