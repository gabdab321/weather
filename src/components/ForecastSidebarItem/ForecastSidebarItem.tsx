import React, {JSX, SetStateAction, useRef} from 'react';
import cl from "./ForecastSidebarItem.module.scss"
import {ForecastKeys} from "../../consts/chartConfig";
import {IForecastHourlyFormatted} from "../../models/IWeather";
import {SidebarStructure} from "../../consts/sidebarStructure";

interface ForecastSidebarItemProps {
    selected: keyof IForecastHourlyFormatted,
    setSelected: React.Dispatch<SetStateAction<ForecastKeys>>
    data: SidebarStructure
}

const ForecastSidebarItem = ({selected, setSelected, data}: ForecastSidebarItemProps) => {
    const selectedRef = useRef(null)

    function handleSelect() {
        setSelected(() => data.paramName)
    }

    const classNames = selected == data.paramName ? `${cl.item} ${cl.item_selected}` : cl.item

    return (
        <div ref={selectedRef} onClick={handleSelect} className={classNames}>
            <div className={cl.item__name_container}>
                <div className={cl.item__icon}><img src={data.icon} alt=""/></div>
                <div className={cl.item__name}>{data.name}</div>
            </div>
            <div className={cl.item__value}>{data.value}</div>
        </div>
    );
};

export default ForecastSidebarItem;