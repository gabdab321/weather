import React from 'react';
import TemperatureSVG from "../../assets/weather/temperature.svg";
import CloudSVG from "../../assets/weather/cloudy.svg"
import WindSVG from "../../assets/weather/wind.svg"
import PrecipitationSVG from "../../assets/weather/raindrop.svg"
import RainSVG from "../../assets/weather/rain.svg"
import CompassSVG from "../../assets/weather/Compass.svg"
import WindDirectionSVG from "../../assets/weather/windDirection.svg"
import UVIndex from "../../assets/weather/UvIndex.svg"
import average from "../../utils/average/average";
import {useAppSelector} from "../../hooks/reduxHooks";
import Loader from "../UI/Loader/Loader";
import cl from "./ForecastSidebar.module.scss"
import getUvIndexColor from "../../utils/getUvIndexColor/getUvIndexColor";

interface ForecastSidebarProps {
    date: string
}

const ForecastSidebar = ({date}: ForecastSidebarProps) => {
    const dayForecast = useAppSelector(state => state.forecast.forecast?.forecast)

    return (
        <div className={cl.sidebar}>
            {dayForecast ?
                <>
                    <div className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={TemperatureSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Temperature</p>
                        </div>
                        <p className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.temp)}°C</p>
                    </div>
                    <div className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={CloudSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Cloud Cover</p>
                        </div>
                        <p className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.cloudCover)}%</p>
                    </div>
                    <div className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={WindSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Wind speed</p>
                        </div>
                        <p className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.windSpeed)}km/h</p>
                    </div>
                    <div className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={PrecipitationSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Precipitation</p>
                        </div>
                        <p className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.precipitation)}mm</p>
                    </div>
                    <div className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={RainSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Rain Probability</p>
                        </div>
                        <p className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.precipitation)}%</p>
                    </div>
                    <div className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={CompassSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Wind direction</p>
                        </div>
                        <div style={{width: "32px", height: "32px"}} className={cl.sidebar__value}><img style={{transform: `rotate(${average(dayForecast[date as string].hourly.windDirection)}deg)`}} src={WindDirectionSVG} alt=""/></div>
                    </div>
                    <div className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={UVIndex} alt=""/></div>
                            <p className={cl.sidebar__name}>UV index</p>
                        </div>
                        <p style={{color: getUvIndexColor(average(dayForecast[date as string].hourly.uv_index))}} className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.uv_index)}</p>
                    </div>
                </>
                :
                <Loader/>
            }

        </div>
    );
};

export default ForecastSidebar;