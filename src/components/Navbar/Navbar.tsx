import React from 'react';
import cl from "./Navbar.module.scss"
import Search from "../Search/Search";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <Search/>
            <LanguageSwitcher/>
        </div>
    );
};

export default Navbar;