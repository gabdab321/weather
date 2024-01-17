import React, {JSX, SetStateAction, useRef} from 'react';
import cl from "./ForecastSidebarItem.module.scss"
import {ForecastKeys} from "../../consts/chartConfig";
import {IForecastHourlyFormatted} from "../../models/IWeather";
import {SidebarStructure} from "../../consts/sidebarStructure";
import i18n from "../../i18n";

interface ForecastSidebarItemProps {
    selected: keyof IForecastHourlyFormatted,
    setSelected: React.Dispatch<SetStateAction<ForecastKeys>>
    data: SidebarStructure
}

const ForecastSidebarItem = ({selected, setSelected, data}: ForecastSidebarItemProps) => {
    const selectedRef = useRef(null)
    const language = i18n.language

    function handleSelect() {
        setSelected(() => data.paramName)
    }

    const classNames = selected == data.paramName ? `${cl.item} ${cl.item_selected}` : cl.item

    return (
        <div ref={selectedRef} onClick={handleSelect} className={classNames}>
            <div className={cl.item__name_container}>
                <div className={cl.item__icon}><img src={data.icon} alt=""/></div>
                <div className={cl.item__name}>{language == "uk" ? data.nameUk : data.name}</div>
            </div>
            <div className={cl.item__value}>{language == "uk" ? data.valueUk : data.value}</div>
        </div>
    );
};

export default ForecastSidebarItem;