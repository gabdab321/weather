import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import ForecastAPI from "../../services/ForecastAPI";
import {IForecastFormatted} from "../../models/IWeather";

const MainPage = () => {
    const coords = useAppSelector(state => state.location)

    const date = new Date()

    const [forecast, setForecast] = useState<IForecastFormatted | null>(null)

    useEffect(() => {
        async function getForecast() {
            const data = await ForecastAPI.getForecast(coords)
            setForecast(data)
        }

        getForecast()
    }, [])

    return (
        <div>
            {forecast && <h1>{forecast.forecast[`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`].daily.tempMax} --- {forecast.forecast[`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`].daily.tempMin}</h1>}
        </div>
    );
};

export default MainPage;