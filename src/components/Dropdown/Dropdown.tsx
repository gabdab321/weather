import React from 'react';
import cl from "./Dropdown.module.scss"
import {IPlace} from "../../models/IPlace";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {setLocation} from "../../redux/slices/locationSlice";

interface DropdownProps {
    visible: boolean
    places: IPlace[]
}

/* renders list of places.
   as props takes two values:
   {places} - an array of places to render.
   {visible} - defines visibility of the component.
*/
const Dropdown = ({visible, places}: DropdownProps) => {
    const dispatch = useAppDispatch()

    /* dispatches place coordinates on click */
    function handleMouseDown(place: IPlace) {
        const latitude = place.properties.lat
        const longitude = place.properties.lon

        dispatch(setLocation({latitude, longitude}))
    }

    /* makes formatted place string */
    function formatPlace(place: IPlace): string {
        let formatted = ""

        /* defining variables from place properties */
        const city = place.properties.city
        const state = place.properties.state
        const country = place.properties.country

        /* adding variable into formatted string, if it isn't undefined */
        city ? formatted += city + ", " : formatted += ""
        state ? formatted += state + ", " : formatted += ""
        country ? formatted += country : formatted += ""

        return formatted
    }

    return (
        <>
            {visible
                ?
                <div className={cl.dropdown}>
                    <div className={cl.item_list}>
                        {places.map(place =>
                            <div onMouseDown={() => handleMouseDown(place)} key={place.properties.place_id} className={cl.item}>
                                <FontAwesomeIcon className={cl.icon} icon={faLocationDot} size="lg" />
                                <p>{formatPlace(place)}</p>
                            </div>
                        )}
                    </div>
                </div>
                :
                ""
            }
        </>
    );
};

export default Dropdown;