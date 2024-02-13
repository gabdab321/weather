import React, {useEffect, useRef} from 'react';
import cl from "./Graph.module.scss"
import Chart, { ChartConfiguration } from 'chart.js/auto';
import {IForecastHourlyFormatted} from "../../models/IWeather";
import getChartConfig, {ForecastKeys} from "../../consts/chartConfig";

interface GraphProps {
    forecast: IForecastHourlyFormatted
    selectedParam: ForecastKeys
}

const Graph = ({forecast, selectedParam}: GraphProps) => {
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
                const chartConfig: ChartConfiguration = getChartConfig(forecast, selectedParam)
                chartInstance.current = new Chart(ctx, chartConfig);
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [selectedParam]); // chart is changing with param selection and changing language

    return (
        <div className={cl.graph}>
            <canvas ref={chartContainer}/>
        </div>
    );
};

export default Graph;