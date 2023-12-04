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
    const chartContainer = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
                const chartConfig: ChartConfiguration = getChartConfig(forecast, selectedParam)
                chartInstance.current = new Chart(ctx, chartConfig);
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [selectedParam]);

    return (
        <div className={cl.graph}>
            <canvas ref={chartContainer}/>
        </div>
    );
};

export default Graph;