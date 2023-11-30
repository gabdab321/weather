import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import ForecastAPI from "../../services/ForecastAPI";
import {IForecastFormatted} from "../../models/IWeather";
import ForecastCards from "../../components/ForecastCards/ForecastCards";
import cl from "./MainPage.module.scss"
import {useTranslation} from "react-i18next";
import {setForecast} from "../../redux/slices/forecastSlice";

const MainPage = () => {
    const { t } = useTranslation()
    const location = useAppSelector(state => state.location)
    const weekForecast = useAppSelector(state => state.forecast.forecast)
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function getForecast() {
            const latitude = location.latitude
            const longitude = location.longitude

            const data = await ForecastAPI.getForecast({latitude, longitude})

            if(data) {
                dispatch(setForecast(data));
            }
        }

        getForecast()
    }, [location])

    return (
        <div className={cl.main}>
            <p className={cl.location}>{t("location")} {location.city}, {location.region}</p>
            <ForecastCards/>
        </div>
    );
};

export default MainPage;