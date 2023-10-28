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
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

/* renders list of places.
   as props takes two values:
   {places} - an array of places to render.
   {visible} - defines visibility of the component.
   {setQuery} - input`s query state function
*/
const Dropdown = ({visible, places, setQuery}: DropdownProps) => {
    const dispatch = useAppDispatch()

    /* dispatches coordinates */
    function handleMouseDown(place: IPlace) {
        setQuery("")

        const location = {
            latitude: place.properties.lat,
            longitude: place.properties.lon,
            city: place.properties.city,
            region: place.properties.state
        }

        dispatch(setLocation(location))
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
                                <p>{place.properties.formatted}</p>
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