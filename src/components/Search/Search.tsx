import React, {ChangeEvent, useEffect, useState} from 'react';
import cl from "./Search.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlassLocation} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import AutocompleteAPI from "../../services/AutocompleteAPI";
import {IPlace} from "../../models/IPlace";
import Dropdown from "../Dropdown/Dropdown";

//TODO: make debounce

/* Component for searching the desired location */
const Search = () => {
    const { i18n, t } = useTranslation()

    /* dropdown visibility */
    const [dropdown, setDropdown] = useState<boolean>(false)

    /* input value */
    const [query, setQuery] = useState<string>("")

    /* an array of autocompleted places */
    const [places, setPlaces] = useState<IPlace[]>([])

    /* input event handler */
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }

    useEffect(() => {
        /* Makes API request on query change */
        async function getAutocomplete() {
            /* takes query as text param and i18n current language as lang param */
            const data = await AutocompleteAPI.placeAutocomplete(query, i18n.language, 10)

            /* sets places array if data isn`t null */
            if(data) {
                setPlaces(data)
            }
        }

        getAutocomplete()
    }, [query])

    return (
        <div className={cl.search}>
            <input
                value={query}
                onChange={handleChange}
                placeholder={t(`searchPlaceholder`)}
                className={cl.input}
            />
            <FontAwesomeIcon className={cl.icon} icon={faMagnifyingGlassLocation} size="xl" style={{color: "#ffffff",}} />

            <Dropdown visible={dropdown} places={places} />
        </div>
    );
};

export default Search;