import React, {useState} from 'react';
import {GoogleMapsAPIKey} from "../../consts/apiKey";
import cl from "./InteractiveMap.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import  {APIProvider, Map, AdvancedMarker} from "@vis.gl/react-google-maps";
import {MapMouseEvent} from "@vis.gl/react-google-maps/dist/components/map/use-map-events";
import {setLocation} from "../../redux/slices/locationSlice";
import GeocodingAPI from "../../services/GeocodingAPI";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import i18next from "i18next";
import {useTranslation} from "react-i18next";

/* Component with configuration for Google Maps */
const InteractiveMap = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const {position} = useAppSelector(state => state.location)

    const [localPosition, setLocalPosition] = useState<{lat:number,lng:number}>(position)
    const [isError, setIsError] = useState<boolean>(false)

    async function handleClick(e: MapMouseEvent) {
        if(e.detail.latLng?.lng && e.detail.latLng.lat) {
            setLocalPosition(e.detail.latLng)

            const geocodingResult = await GeocodingAPI.reverseGeocoding(localPosition)

            if(geocodingResult) {
                dispatch(setLocation({
                    position: {lat: localPosition.lat, lng: localPosition.lng},
                    city: geocodingResult.city,
                    region: geocodingResult.region
                }))
            }
        }
    }

    return (
        <APIProvider apiKey={GoogleMapsAPIKey}>
            {isError && <ErrorMessage text={t(`geocodingError`)}/>}
            <div className={cl.map}>
                <Map onClick={handleClick} zoom={9} center={{lat: 50.5, lng: 30.3}} mapId={"66f1e51eb8530986"}>
                    <AdvancedMarker position={localPosition}>
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    );
};

export default InteractiveMap;