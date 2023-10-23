import React from 'react';
import cl from "./ForecastCard.module.scss"
import {wmo} from "../../consts/wmo";
import {useTranslation} from "react-i18next";
import getFormattedDay from "../../utils/getFormattedDay/getFormattedDay";

interface ForecastCardProps {
    date: string,
    dailyForecast: {precipitation: number, tempMax: number, tempMin: number, weatherCode: number}
}

const ForecastCard = ({date, dailyForecast}: ForecastCardProps) => {
    /* getting current user`s language */
    const { i18n } = useTranslation()
    const language = i18n.language

    /* shortcut for WMO data */
    const wmoData = wmo[dailyForecast.weatherCode]

    return (
        <div className={cl.card}>
            {`${getFormattedDay(language, date)} | ${date}`}
            <img className={cl.weather_icon} src={wmoData.icon} alt=""/>
            <div>
                <div>{language === "en" ? wmoData.descriptionEng : wmoData.descriptionUkr}</div>
                <div>{Math.floor(dailyForecast.tempMax)}°C</div>
            </div>
        </div>
    );
};

export default ForecastCard;