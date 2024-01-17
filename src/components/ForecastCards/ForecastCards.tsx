import React, {useState} from 'react';
import cl from "./ForecastCards.module.scss";
import ForecastCard from "../ForecastCard/ForecastCard";
import Loader from "../UI/Loader/Loader";
import {useAppSelector} from "../../hooks/reduxHooks";

const ForecastCards = () => {
    const weekForecast = useAppSelector(state => state.forecast.forecast);
    /* used in ForecastCard component as an indicator of container hover */
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false)

    /* work only when mouse is on cards, otherwise just ignores, made for better UX */
    function handleMouseOver(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target
        if(target instanceof HTMLElement) {
            // checking if the target is not part of the container`s inner elements
            if(!target.classList.contains(cl.container)) {
                setIsMouseOver(true)
            }
        }
    }

    /* removes blur and resize card to normal size */
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
            {weekForecast

                ?
                Object.keys(weekForecast.forecast).map((date, index) => <ForecastCard
                    isContainerHovered={isMouseOver}
                    zIndex={100 - index}
                    date={date}
                    dailyForecast={weekForecast.forecast[date].daily}
                    key={date}
                />)
                :
                <Loader/>
            }
        </div>
    );
};

export default ForecastCards;