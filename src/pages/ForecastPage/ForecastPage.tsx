import React, {useEffect, useState} from 'react';
import cl from "./ForecastPage.module.scss"
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import ForecastAPI from "../../services/ForecastAPI";
import {setForecast} from "../../redux/slices/forecastSlice";
import Loader from "../../components/UI/Loader/Loader";
import {useTranslation} from "react-i18next";
import ForecastSidebar from "../../components/ForecastSidebar/ForecastSidebar";
import Graph from "../../components/Graph/Graph";
import {ForecastKeys} from "../../consts/chartConfig";

const ForecastPage = () => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const {date} = useParams()
    const dayForecast = useAppSelector(state => state.forecast.forecast?.forecast);
    const {city, region, latitude, longitude} = useAppSelector(state => state.location)
    const [sidebarSelected, setSidebarSelected] = useState<ForecastKeys>(ForecastKeys.Temp)

    /* using api to get forecast for the whole week, then getting desired day by date as a key */
    useEffect(() => {
        async function getForecastByDate() {
            const data = await ForecastAPI.getForecast({latitude, longitude});
            if(data) dispatch(setForecast(data))
        }

        getForecastByDate()
    }, [])

    console.log(sidebarSelected)

    return (
        <div className={cl.main}>
            {dayForecast && date ?
                <>
                    <p className={cl.information}>{t("location")} {city}{region && city ? "," : ""} {region}</p>
                    <div className={cl.forecast}>
                        <ForecastSidebar selected={sidebarSelected} setSelected={setSidebarSelected} date={date as string}/>
                        <Graph selectedParam={sidebarSelected} forecast={dayForecast[date].hourly}/>
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