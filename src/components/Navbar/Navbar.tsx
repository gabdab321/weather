import React from 'react';
import cl from "./Navbar.module.scss"
import Search from "../Search/Search";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const { i18n } = useTranslation()

    function changeLanguage(language: string) {
        i18n.changeLanguage(language)
    }

    return (
        <div className={cl.navbar}>
            <Search/>
            <div>
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("ua")}>UA</button>
            </div>
        </div>
    );
};

export default Navbar;