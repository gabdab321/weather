import React, {SetStateAction} from 'react';
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
import {IForecastHourlyFormatted} from "../../models/IWeather";
import {ForecastKeys} from "../../consts/chartConfig";

interface ForecastSidebarProps {
    date: string,
    selected: keyof IForecastHourlyFormatted,
    setSelected: React.Dispatch<SetStateAction<ForecastKeys>>
}

const ForecastSidebar = ({date, selected, setSelected}: ForecastSidebarProps) => {
    const dayForecast = useAppSelector(state => state.forecast.forecast?.forecast)
    let minTemp, maxTemp

    if(dayForecast) {
        minTemp = Math.round(Math.min(...dayForecast[date as string].hourly.temp))
        maxTemp = Math.round(Math.max(...dayForecast[date as string].hourly.temp))
    }

    function handleSelect(item: ForecastKeys) {
        setSelected(() => item)
    }

    return (
        <div className={cl.sidebar}>
            {dayForecast ?
                <>
                    <div onClick={() => handleSelect(ForecastKeys.Temp)} className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={TemperatureSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Temperature</p>
                        </div>
                        <p className={cl.sidebar__value}>{minTemp}...{maxTemp}°C</p>
                    </div>

                    <div onClick={() => handleSelect(ForecastKeys.CloudCover)} className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={CloudSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Cloud Cover</p>
                        </div>
                        <p className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.cloudCover)}%</p>
                    </div>

                    <div onClick={() => handleSelect(ForecastKeys.WindSpeed)} className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={WindSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Wind speed</p>
                        </div>
                        <p className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.windSpeed)}km/h</p>
                    </div>

                    <div onClick={() => handleSelect(ForecastKeys.Precipitation)} className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={PrecipitationSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Precipitation</p>
                        </div>
                        <p className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.precipitation)}mm</p>
                    </div>

                    <div onClick={() => handleSelect(ForecastKeys.PrecipitationProbability)} className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={RainSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Rain Probability</p>
                        </div>
                        <p className={cl.sidebar__value}>{average(dayForecast[date as string].hourly.precipitation)}%</p>
                    </div>

                    <div onClick={() => handleSelect(ForecastKeys.WindDirection)} className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={CompassSVG} alt=""/></div>
                            <p className={cl.sidebar__name}>Wind direction</p>
                        </div>
                        <div style={{width: "32px", height: "32px"}} className={cl.sidebar__value}><img style={{transform: `rotate(${average(dayForecast[date as string].hourly.windDirection)}deg)`}} src={WindDirectionSVG} alt=""/></div>
                    </div>

                    <div onClick={() => handleSelect(ForecastKeys.UvIndex)} className={cl.sidebar__container}>
                        <div className={cl.sidebar__name_container}>
                            <div className={cl.sidebar__icon}><img src={UVIndex} alt=""/></div>
                            <p className={cl.sidebar__name}>UV index</p>
                        </div>
                        <p style={{color: getUvIndexColor(Math.max(...dayForecast[date as string].hourly.uv_index))}} className={cl.sidebar__value}>{Math.max(...dayForecast[date as string].hourly.uv_index)}</p>
                    </div>
                </>
                :
                <Loader/>
            }

        </div>
    );
};

export default ForecastSidebar;