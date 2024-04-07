import React from 'react';
import cl from "./LanguageSwitcher.module.scss"
import uaFlag from "../../assets/flags/ukraineFlag.png"
import gbFlag from "../../assets/flags/gbFlag.png"
import {useTranslation} from "react-i18next";
import GeocodingAPI from "../../services/GeocodingAPI";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {setLocation} from "../../redux/slices/locationSlice";


/* Switches page language between English and Ukrainian */
const LanguageSwitcher = () => {
    const { i18n } = useTranslation()
    const {lat, lng} = useAppSelector(state => state.location.position)
    const dispatch = useAppDispatch()

    /* changes language and makes geocoding request, so location's city and region will be translated*/
    async function changeLanguage(language: string) {
        await i18n.changeLanguage(language)

        const geocodingResult = await GeocodingAPI.reverseGeocoding({lat, lng})
        if(geocodingResult) {
            dispatch(setLocation({...geocodingResult, position: {lat, lng}}))
        }
    }

    return (
        <div className={cl.switcher}>
            <img onClick={() => changeLanguage("uk")} className={cl.flag} src={uaFlag} alt="ukraine"/>
            <img onClick={() => changeLanguage("en")} className={cl.flag} src={gbFlag} alt="great britain"/>
        </div>
    );
};

export default LanguageSwitcher;