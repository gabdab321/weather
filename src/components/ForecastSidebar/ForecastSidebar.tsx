import React, {SetStateAction, useRef} from 'react';
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
import getSidebarStructure from "../../consts/sidebarStructure";
import ForecastSidebarItem from "../ForecastSidebarItem/ForecastSidebarItem";

interface ForecastSidebarProps {
    date: string,
    selected: keyof IForecastHourlyFormatted,
    setSelected: React.Dispatch<SetStateAction<ForecastKeys>>
}

const ForecastSidebar = ({date, selected, setSelected}: ForecastSidebarProps) => {
    const dayForecast = useAppSelector(state => state.forecast.forecast?.forecast)

    return (
        <div className={cl.sidebar}>
            {dayForecast ?
                getSidebarStructure(dayForecast[date as string].hourly).map(item => <ForecastSidebarItem selected={selected} setSelected={setSelected} data={item} key={item.name}/>)
                :
                <Loader/>
            }

        </div>
    );
};

export default ForecastSidebar;