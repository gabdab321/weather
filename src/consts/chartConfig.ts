import {TooltipItem} from "chart.js";
import {ChartConfiguration} from "chart.js/auto";
import {IForecastHourlyFormatted} from "../models/IWeather";

export default getChartConfig;

export enum ForecastKeys  {
    CloudCover = 'cloudCover',
    Temp = 'temp',
    Time = 'time',
    WindSpeed = "windSpeed",
    Precipitation = "precipitation",
    PrecipitationProbability = "precipitationProbability",
    UvIndex = "uv_index",
    WindDirection = "windDirection"
}

function getChartConfig(forecast: IForecastHourlyFormatted, selectedParam: ForecastKeys): ChartConfiguration {
    const data: number[] = Array.isArray(forecast[selectedParam])
        ? (forecast[selectedParam] as number[])
        : [];

    return {
        type: 'line',
        data: {
            labels: forecast.time,
            datasets: [{
                label: 'Temperature °C',
                data: data,
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
                    suggestedMin: Math.round(Math.min(...data)) - 5,
                    suggestedMax: Math.round(Math.max(...data)) + 5
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
}