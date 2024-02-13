import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import ForecastAPI from "../../services/ForecastAPI";
import ForecastCards from "../../components/ForecastCards/ForecastCards";
import cl from "./MainPage.module.scss"
import {useTranslation} from "react-i18next";
import {setForecast} from "../../redux/slices/forecastSlice";
import InteractiveMap from "../../components/InteractiveMap/InteractiveMap";

const MainPage = () => {
    const { t } = useTranslation()
    const location = useAppSelector(state => state.location)
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function getForecast() {
            const data = await ForecastAPI.getForecast(location.position)

            if(data) {
                dispatch(setForecast(data));
            }
        }

        getForecast()
    }, [location])

    return (
        <div className={cl.main}>
            <p className={cl.location}>{t("location")} {location.city}{location.region && location.city ? "," : ""} {location.region}</p>
            <ForecastCards/>
            <p className={cl.location_choose}>{t(`mapPick`)}</p>
            <InteractiveMap/>
        </div>
    );
};

export default MainPage;