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
            hourly: Array<{cloudCover: number, temp: number, time: string, weatherCode: number, windSpeed: number}>
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