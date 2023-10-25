import React, {useRef, useState} from 'react';
import {IForecastFormatted} from "../../models/IWeather";
import cl from "./ForecastCards.module.scss";
import ForecastCard from "../ForecastCard/ForecastCard";
import Loader from "../UI/Loader/Loader";

interface ForecastCardsProps {
    forecast: IForecastFormatted | null
}
const ForecastCards = ({forecast}: ForecastCardsProps) => {
    /* used in ForecastCard component as an indicator of container hover */
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false)

    function handleMouseOver() {
        setIsMouseOver(true)
    }

    function handleMouseOut() {
        setIsMouseOver(false)
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={cl.container}>
            {forecast
                ?
                Object.keys(forecast.forecast).map((date, index) => <ForecastCard
                    isContainerHovered={isMouseOver}
                    zIndex={100 - index}
                    date={date}
                    dailyForecast={forecast.forecast[date].daily}
                    key={date}
                />)
                :
                <Loader/>
            }
        </div>
    );
};

export default ForecastCards;