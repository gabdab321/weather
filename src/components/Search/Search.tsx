import React from 'react';
import cl from "./Search.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

const Search = () => {
    const { t } = useTranslation()

    return (
        <div className={cl.search}>
            <input placeholder={t(`searchPlaceholder`)} className={cl.input}/>
            <FontAwesomeIcon className={cl.icon} icon={faLocationDot} size="xl" style={{color: "#ffffff",}} />
        </div>
    );
};

export default Search;