import React, {useState} from 'react';
import GoogleMapReact, {ClickEventValue} from "google-map-react";
import {GoogleMapsAPIKey} from "../../consts/apiKey";
import cl from "./InteractiveMap.module.scss"
import i18n from "i18next";
import {useAppSelector} from "../../hooks/reduxHooks";
import  {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from "@vis.gl/react-google-maps";
import {MapMouseEvent} from "@vis.gl/react-google-maps/dist/components/map/use-map-events";

interface MarkerProps {
    lat: number
    lng: number
    text: string
}

const Marker:React.FC<MarkerProps> = ({text}) => {
    return <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
}

/* Component with configuration for Google Maps */
const InteractiveMap = () => {
    const {position} = useAppSelector(state => state.location)
    const [localPosition, setLocalPosition] = useState<{lat:number,lng:number}>(position)

    function handleClick(e: MapMouseEvent) {
        if(e.detail.latLng?.lng && e.detail.latLng.lat) {
            setLocalPosition(e.detail.latLng)
        }
    }

    return (
        <APIProvider apiKey={GoogleMapsAPIKey}>
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