/* models of raw and formatted forecast data */

export interface IForecastFormatted {
    latitude: number,
    longitude: number,
    forecast: {
        [key: string]: {
            daily: {
                precipitation: number
                tempMax: number
                tempMin: number
                weatherCode: number
            },
            hourly: {
                cloudCover: number[],
                temp: number[],
                time: string[],
                weatherCode: number[],
                windSpeed: number[],
                precipitation: number[],
                precipitationProbability: number[],
                uv_index: number[],
                windDirection: number[],
            }
        }
    }
}

export interface IForecastRaw {
    latitude: number,
    longitude: number,
    hourly: {
        time: string[],
        temperature_2m: number[],
        precipitation: number[],
        precipitation_probability: number[],
        uv_index: number[],
        wind_direction_10m: number[],
        weathercode: number[],
        cloudcover: number[],
        windspeed_10m: number[]
    },
    daily: {
        time: string[],
        weathercode: number[],
        temperature_2m_max: number[],
        temperature_2m_min: number[],
        precipitation_sum: number[]
    }
}