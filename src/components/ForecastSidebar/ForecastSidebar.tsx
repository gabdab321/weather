import React, {SetStateAction} from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import Loader from "../UI/Loader/Loader";
import cl from "./ForecastSidebar.module.scss"
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