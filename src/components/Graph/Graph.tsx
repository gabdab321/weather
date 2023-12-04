import React, {useEffect, useRef} from 'react';
import cl from "./Graph.module.scss"
import Chart, { ChartConfiguration } from 'chart.js/auto';
import {TooltipItem } from "chart.js";

interface temp {
    forecast: any
}
const Graph = ({forecast}: temp) => {
    const chartContainer = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    console.log(forecast)

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
                const chartConfig: ChartConfiguration = {
                    type: 'line',
                    data: {
                        labels: forecast.hourly.time,
                        datasets: [{
                            label: 'Temperature °C',
                            data: forecast.hourly.temp,
                            borderColor: 'red',
                            borderWidth: 2.5,
                            fill: false,
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Time',
                                    color: "#000",
                                    font: {
                                        size: 18,
                                        weight: "bold"
                                    }
                                },
                                ticks: {
                                    font: {
                                        size: 12
                                    },
                                    color: '#000'
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Temperature °C',
                                    color: "#000",
                                    font: {
                                        size: 18,
                                        weight: "bold"
                                    }
                                },
                                ticks: {
                                    font: {
                                        size: 12
                                    },
                                    color: '#000'
                                },
                                suggestedMin: Math.round(Math.min(...forecast.hourly.temp)) - 5,
                                suggestedMax: Math.round(Math.max(...forecast.hourly.temp)) + 5
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: (tooltipItem: TooltipItem<any>) => {
                                        return `Temperature ${tooltipItem.parsed.y} °C`;
                                    },
                                }
                            },
                            legend: {
                                display: false
                            }
                        },
                    }
                };
                chartInstance.current = new Chart(ctx, chartConfig);
                console.log(Math.round(Math.min(...forecast.hourly.temp)) + 10)
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className={cl.graph}>
            <canvas ref={chartContainer}/>
        </div>
    );
};

export default Graph;