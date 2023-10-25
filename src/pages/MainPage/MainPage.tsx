import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import ForecastAPI from "../../services/ForecastAPI";
import {IForecastFormatted} from "../../models/IWeather";
import ForecastCards from "../../components/ForecastCards/ForecastCards";

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
            <ForecastCards forecast={weekForecast}/>
        </div>
    );
};

export default MainPage;