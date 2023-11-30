import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import ForecastAPI from "../../services/ForecastAPI";
import {IForecastFormatted} from "../../models/IWeather";
import ForecastCards from "../../components/ForecastCards/ForecastCards";
import cl from "./MainPage.module.scss"
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation()
    const location = useAppSelector(state => state.location)
    const [weekForecast, setWeekForecast] = useState<IForecastFormatted | null>(null)

    useEffect(() => {
        async function getForecast() {
            const latitude = location.latitude
            const longitude = location.longitude

            const data = await ForecastAPI.getForecast({latitude, longitude})
            console.log(data);
            setWeekForecast(data)
        }

        getForecast()
    }, [location])

    return (
        <div className={cl.main}>
            <p className={cl.location}>{t("location")} {location.city}, {location.region}</p>
            <ForecastCards forecast={weekForecast}/>
        </div>
    );
};

export default MainPage;