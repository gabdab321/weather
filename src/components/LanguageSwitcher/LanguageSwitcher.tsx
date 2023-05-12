import React from 'react';
import cl from "./LanguageSwitcher.module.scss"
import uaFlag from "../../assets/flags/ukraineFlag.png"
import gbFlag from "../../assets/flags/gbFlag.png"
import {useTranslation} from "react-i18next";


/* Switches page language between English and Ukrainian */
const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    /* changes language */
    function changeLanguage(language: string) {
        i18n.changeLanguage(language)
    }

    return (
        <div className={cl.switcher}>
            <img onClick={() => changeLanguage("uk")} className={cl.flag} src={uaFlag} alt="ukraine"/>
            <img onClick={() => changeLanguage("en")} className={cl.flag} src={gbFlag} alt="great britain"/>
        </div>
    );
};

export default LanguageSwitcher;