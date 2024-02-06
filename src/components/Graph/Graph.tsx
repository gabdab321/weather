import React, {useEffect, useRef} from 'react';
import cl from "./Graph.module.scss"
import Chart, { ChartConfiguration } from 'chart.js/auto';
import {IForecastHourlyFormatted} from "../../models/IWeather";
import getChartConfig, {ForecastKeys} from "../../consts/chartConfig";
import i18next from "i18next";

interface GraphProps {
    forecast: IForecastHourlyFormatted
    selectedParam: ForecastKeys
}

//TODO:make better tooltips
//TODO:make smth like compass for wind direction param

const Graph = ({forecast, selectedParam}: GraphProps) => {
    const {language} = i18next

    /* defining refs for chart canvas */
    const chartContainer = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        /* default chart.js configuration, */
        if (chartContainer && chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
                /* using separate function to create config object with a necessary params and chart language */
                const chartConfig: ChartConfiguration = getChartConfig(forecast, selectedParam, language)
                chartInstance.current = new Chart(ctx, chartConfig);
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [selectedParam, language]); // chart is changing with param selection and changing language

    return (
        <div className={cl.graph}>
            <canvas ref={chartContainer}/>
        </div>
    );
};

export default Graph;