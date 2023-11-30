import React, {useRef, useState} from 'react';
import cl from "./ForecastCard.module.scss"
import {wmo} from "../../consts/wmo";
import {useTranslation} from "react-i18next";
import getFormattedDay from "../../utils/getFormattedDay/getFormattedDay";

interface ForecastCardProps {
    date: string,
    dailyForecast: {precipitation: number, tempMax: number, tempMin: number, weatherCode: number},
    zIndex: number,
    isContainerHovered: boolean
}

const ForecastCard = ({date, dailyForecast, zIndex, isContainerHovered}: ForecastCardProps) => {
    /* getting current user`s language */
    const { i18n } = useTranslation()
    const language = i18n.language

    /* shortcut for WMO data */
    const wmoData = wmo[dailyForecast.weatherCode]

    /* by default takes a value of isContainerHovered prop */
    const [isMouseOver, setIsMouseOver] = useState<boolean>(isContainerHovered)
    const cardRef = useRef<HTMLDivElement | null>(null)

    /* firstly I write filter style for active(hovered) card */
    let filterStyle = isMouseOver ? "none" : "blur(2px)";
    /* if user`s mouse is inside the container and this card is inactive(unhovered), then it blurs, otherwise - it is not*/
    if(isContainerHovered && !isMouseOver) {
        filterStyle = "blur(2px)"
    }else {
        filterStyle = "none"
    }

    function handleMouseOver() {
        setIsMouseOver(true)

        /* sets hovered card over all other */
        if(cardRef.current) {
            cardRef.current.style.zIndex = "1000";
        }
    }

    function handleMouseOut() {
        setIsMouseOver(false)

        /* sets default zIndex when mouse leaves from card */
        if(cardRef.current) {
            cardRef.current.style.zIndex = String(zIndex);
        }
    }

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            ref={cardRef}
            className={cl.card}
            style={{zIndex: zIndex, filter: filterStyle}}
        >
            <p className={cl.date}>{`${getFormattedDay(language, date)} | ${date}`}</p>
            <img className={cl.weather_icon} src={wmoData.icon} alt=""/>
            <div className={cl.container}>
                <p>{language === "en" ? wmoData.descriptionEng : wmoData.descriptionUkr}</p>
                <p className={cl.dot}></p>
                <p>{Math.floor(dailyForecast.tempMax)}°C</p>
            </div>
        </div>
    );
};

export default ForecastCard;