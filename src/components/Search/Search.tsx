import React, {ChangeEvent, useEffect, useState} from 'react';
import cl from "./Search.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlassLocation} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import AutocompleteAPI from "../../services/AutocompleteAPI";
import {IPlace} from "../../models/IPlace";
import Dropdown from "../Dropdown/Dropdown";
import useDebounce from "../../hooks/useDebounce";

//TODO: make debounce

/* Component for searching the desired location */
const Search = () => {
    const { i18n, t } = useTranslation()

    const [dropdown, setDropdown] = useState<boolean>(false) // dropdown visibility

    const [query, setQuery] = useState<string>("") // input value
    const debouncedQuery = useDebounce<string>(query, 700) // debounced input value

    const [places, setPlaces] = useState<IPlace[]>([]) // an array of autocompleted places

    /* input event handler */
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }

    /* makes dropdown visible on focus */
    function handleFocus() {
        setDropdown(true)
    }

    /* makes dropdown invisible on blur */
    function handleBlur() {
        setDropdown(false)
    }

    useEffect(() => {
        /* Makes API request on query change */
        async function getAutocomplete() {
            /* takes query as text param and i18n current language as lang param */
            const data = await AutocompleteAPI.placeAutocomplete(query, i18n.language, 10)

            /* sets places array if data isn`t null */
            if(data) {
                setPlaces(data)
                return
            }

            /* sets an empty array if data is null */
            setPlaces([])
        }

        getAutocomplete()
    }, [debouncedQuery])

    return (
        <div className={cl.search}>
            <input
                value={query}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={t(`searchPlaceholder`)}
                className={cl.input}
            />
            <FontAwesomeIcon className={cl.icon} icon={faMagnifyingGlassLocation} style={{color: "#ffffff",}} />

            <Dropdown visible={dropdown} places={places} />
        </div>
    );
};

export default Search;