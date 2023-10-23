import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import ForecastAPI from "../../services/ForecastAPI";
import {IForecastFormatted} from "../../models/IWeather";
import cl from "./MainPage.module.scss"
import Loader from "../../components/UI/Loader/Loader";
import ForecastCard from "../../components/ForecastCard/ForecastCard";

const MainPage = () => {
    const coords = useAppSelector(state => state.location)

    const date = new Date()

    const [weekForecast, setWeekForecast] = useState<IForecastFormatted | null>(null)

    useEffect(() => {
        async function getForecast() {
            const data = await ForecastAPI.getForecast(coords)
            setWeekForecast(data)
        }

        getForecast()
    }, [coords])

    return (
        <div>
            <div className={cl.forecast_container}>
                {weekForecast
                    ?
                    Object.keys(weekForecast.forecast).map(date =>
                        <ForecastCard date={date} dailyForecast={weekForecast.forecast[date].daily} key={date}/>
                    )
                    :
                    <Loader/>
                }
            </div>
            {/*{forecast && <h1>{forecast.forecast[`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`].daily.tempMax} --- {forecast.forecast[`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`].daily.tempMin}</h1>}*/}
        </div>
    );
};

export default MainPage;