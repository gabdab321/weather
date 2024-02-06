import {IForecastHourlyFormatted} from "../models/IWeather";
import TemperatureSVG from "../assets/weather/temperature.svg";
import CloudSVG from "../assets/weather/cloudy.svg"
import WindSVG from "../assets/weather/wind.svg"
import PrecipitationSVG from "../assets/weather/raindrop.svg"
import RainSVG from "../assets/weather/rain.svg"
import CompassSVG from "../assets/weather/Compass.svg"
import WindDirectionSVG from "../assets/weather/windDirection.svg"
import UVIndex from "../assets/weather/UvIndex.svg"
import average from "../utils/average/average";
import cl from "../components/ForecastSidebar/ForecastSidebar.module.scss";
import React from "react";
import getUvIndexColor from "../utils/getUvIndexColor/getUvIndexColor";
import {ForecastKeys} from "./chartConfig";
import i18next from "../i18n";

export default getSidebarStructure;

export interface SidebarStructure {
    name: string,
    icon: string,
    value: string | number | JSX.Element,
    paramName: ForecastKeys
}

/* Function to generate a structured array for displaying weather parameters in a sidebar */
function getSidebarStructure(hourlyForecast: IForecastHourlyFormatted): SidebarStructure[] {
    const t = i18next.t

    const minTemp = Math.round(Math.min(...hourlyForecast.temp))
    const maxTemp = Math.round(Math.max(...hourlyForecast.temp))

    /* Returning an array of objects, each representing a different weather parameter */
    return [
        {
            name: t(`temperature`),
            icon: TemperatureSVG,
            value: `${minTemp}°C...${maxTemp}°C`,
            paramName: ForecastKeys.Temp
        },
        {
            name: t(`cloudCover`),
            icon: CloudSVG,
            value: average(hourlyForecast.cloudCover) + "%",
            paramName: ForecastKeys.CloudCover
        },
        {
            name:  t(`windSpeed`),
            icon: WindSVG,
            value: average(hourlyForecast.windSpeed) + t(`kilometersPerHour`),
            paramName: ForecastKeys.WindSpeed
        },
        {
            name: t(`precipitation`),
            icon: PrecipitationSVG,
            value: average(hourlyForecast.precipitation) + t(`millimeters`),
            paramName: ForecastKeys.Precipitation
        },
        {
            name: t(`rainProbability`),
            icon: RainSVG,
            value: average(hourlyForecast.precipitation) + "%",
            paramName: ForecastKeys.PrecipitationProbability
        },
        {
            name: t(`windDirection`),
            icon: CompassSVG,
            /* Rendering a div with a rotated wind direction arrow based on the average wind direction */
            value: <div style={{width: "32px", height: "32px"}} className={cl.sidebar__value}>
                <img style={{transform: `rotate(${average(hourlyForecast.windDirection)}deg)`}} src={WindDirectionSVG} alt=""/>
            </div>,
            paramName: ForecastKeys.WindDirection
        },
        {
            name: t(`UvIndex`),
            icon: UVIndex,
            /* Rendering UV index value with color based on the UV index level */
            value: <span style={{color: getUvIndexColor(Math.max(...hourlyForecast.uv_index))}}>{average(hourlyForecast.precipitation)}</span>,
            paramName: ForecastKeys.UvIndex
        },
    ]
}