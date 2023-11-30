import { IForecastFormatted, IForecastRaw } from "../../models/IWeather";

export function formatResponse(data: IForecastRaw): IForecastFormatted {
    const formatted: IForecastFormatted = {
        latitude: data.latitude,
        longitude: data.longitude,
        forecast: {}
    }

    for (let i = 0; i < data.daily.time.length; i++) {
        formatted.forecast[data.daily.time[i]] = {
            daily: {
                precipitation: data.daily.precipitation_sum[i],
                tempMax: data.daily.temperature_2m_max[i],
                tempMin: data.daily.temperature_2m_min[i],
                weatherCode: data.daily.weathercode[i]
            },
            hourly: makeHourly(i)
        }
    }

    function makeHourly(i: number) {
        const startIndex = i * 24;
        const endIndex = startIndex + 24;

        const time = data.hourly.time.slice(startIndex, endIndex).map(item => item.slice(-5));
        const temp = data.hourly.temperature_2m.slice(startIndex, endIndex);
        const cloudCover = data.hourly.cloudcover.slice(startIndex, endIndex);
        const weatherCode = data.hourly.weathercode.slice(startIndex, endIndex);
        const windSpeed = data.hourly.windspeed_10m.slice(startIndex, endIndex);
        const precipitation = data.hourly.precipitation.slice(startIndex, endIndex);
        const precipitationProbability = data.hourly.precipitation_probability.slice(startIndex, endIndex);
        const uvIndex = data.hourly.uv_index.slice(startIndex, endIndex);
        const windDirection = data.hourly.wind_direction_10m.slice(startIndex, endIndex);
        //const average = (arr: number[]) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
        return {
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

    return formatted;
}
