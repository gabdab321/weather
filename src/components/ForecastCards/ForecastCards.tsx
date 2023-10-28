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

    /* work only when mouse is on cards, otherwise just ignores, made for better UX */
    function handleMouseOver(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target
        if(target instanceof HTMLElement) {
            if(!target.classList.contains(cl.container)) {
                setIsMouseOver(true)
            }
        }
    }

    function handleMouseOut(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target
        if(target instanceof HTMLElement) {
            if(!target.classList.contains(cl.container)) {
                setIsMouseOver(false)
            }
        }
    }

    return (
        <div
            onMouseOver={e => handleMouseOver(e)}
            onMouseOut={e => handleMouseOut(e)}
            className={cl.container}
        >
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