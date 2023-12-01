import React, {useEffect} from 'react';
import cl from "./ForecastPage.module.scss"
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import ForecastAPI from "../../services/ForecastAPI";
import {setForecast} from "../../redux/slices/forecastSlice";
import Loader from "../../components/UI/Loader/Loader";
import {useTranslation} from "react-i18next";
import TemperatureSVG from "../../assets/weather/temperature.svg"
import average from "../../utils/average/average";
import ForecastSidebar from "../../components/ForecastSidebar/ForecastSidebar";

const ForecastPage = () => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const {date} = useParams()
    const dayForecast = useAppSelector(state => state.forecast.forecast?.forecast);
    const {city, region, latitude, longitude} = useAppSelector(state => state.location)

    /* using api to get forecast for the whole week, then getting desired day by date as a key */
    useEffect(() => {
        async function getForecastByDate() {
            const data = await ForecastAPI.getForecast({latitude, longitude});
            if(data) dispatch(setForecast(data))
        }

        getForecastByDate()
    }, [])

    return (
        <div className={cl.main}>
            {dayForecast ?
                <>
                    <p className={cl.information}>{t("location")} {city}{region && city ? "," : ""} {region}</p>
                    <div className={cl.forecast}>
                        <ForecastSidebar date={date as string}/>
                    </div>
                </>
                :
                <div style={{marginTop: "80px"}}>
                    <Loader/>
                </div>
            }

        </div>
    );
};

export default ForecastPage;