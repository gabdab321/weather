/* Importing necessary interfaces from the weather models */
import { IForecastFormatted, IForecastRaw } from "../../models/IWeather";

/* Function to format raw weather data into a structured format */
export function formatResponse(data: IForecastRaw): IForecastFormatted {
    /* Initialize the formatted data object */
    const formatted: IForecastFormatted = {
        latitude: data.latitude,
        longitude: data.longitude,
        forecast: {}
    }

    /* Loop through each day's weather data */
    for (let i = 0; i < data.daily.time.length; i++) {
        /* Assign daily weather details to the formatted data */
        formatted.forecast[data.daily.time[i]] = {
            daily: {
                date: data.daily.time[i],
                precipitation: data.daily.precipitation_sum[i],
                tempMax: data.daily.temperature_2m_max[i],
                tempMin: data.daily.temperature_2m_min[i],
                weatherCode: data.daily.weathercode[i]
            },
            /* Create hourly weather details for the current day */
            hourly: makeHourly(i)
        }
    }

    /* Function to generate hourly weather data for a given day index */
    function makeHourly(i: number) {
        /* Calculate start and end indices for hourly data */
        const startIndex = i * 24;
        const endIndex = startIndex + 24;

        /* Extract hourly data for various weather parameters */
        const date = data.hourly.time.slice(startIndex, endIndex)[0].slice(0, 9)
        const time = data.hourly.time.slice(startIndex, endIndex).map(item => item.slice(-5));
        const temp = data.hourly.temperature_2m.slice(startIndex, endIndex);
        const cloudCover = data.hourly.cloudcover.slice(startIndex, endIndex);
        const weatherCode = data.hourly.weathercode.slice(startIndex, endIndex);
        const windSpeed = data.hourly.windspeed_10m.slice(startIndex, endIndex);
        const precipitation = data.hourly.precipitation.slice(startIndex, endIndex);
        const precipitationProbability = data.hourly.precipitation_probability.slice(startIndex, endIndex);
        const uvIndex = data.hourly.uv_index.slice(startIndex, endIndex);
        const windDirection = data.hourly.wind_direction_10m.slice(startIndex, endIndex);

        /* Return the formatted hourly weather data for the day */
        return {
            date: date,
            time: time,
            temp: temp,
            cloudCover: cloudCover,
            weatherCode: weatherCode,
            windSpeed: windSpeed,
            precipitation: precipitation,
            precipitationProbability: precipitationProbability,
            uv_index: uvIndex,
            windDirection: windDirection
        };
    }

    /* Return the final formatted weather data */
    return formatted;
}
