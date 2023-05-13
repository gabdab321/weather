import React from 'react';
import cl from "./Dropdown.module.scss"
import {IPlace} from "../../models/IPlace";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

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
    return (
        <>
            {visible
                ?
                <div className={cl.dropdown}>
                    <div className={cl.item_list}>
                        {places.map(place =>
                            <div key={place.properties.place_id} className={cl.item}>
                                <FontAwesomeIcon className={cl.icon} icon={faLocationDot} size="lg" />
                                <p>{place.properties.address_line2}</p>
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