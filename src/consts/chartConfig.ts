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

interface IParamMeasures {
    [key: string] : {
        name: string,
        nameFormatted: string,
        measurementUnit: string,
        minValue: number | ((arr: number[]) => number),
        maxValue: number | ((arr: number[]) => number)
    }
}

/* object containing measurement details for each weather parameter */
const paramMeasures: IParamMeasures = {
    cloudCover: {
        name: "Cloud cover",
        nameFormatted: "Cloud cover  %",
        measurementUnit: "%",
        minValue: 0,
        maxValue: 100
    },
    temp: {
        name: "Temperature",
        nameFormatted: "Temperature  °C",
        measurementUnit: "°C",
        minValue: (arr) => Math.round(Math.min(...arr)) - 5,
        maxValue: (arr) => Math.round(Math.max(...arr)) + 5
    },
    windSpeed: {
        name: "Wind speed",
        nameFormatted: "Wind speed  km/h",
        measurementUnit: "km/h",
        minValue: 0,
        maxValue: 40
    },
    precipitation: {
        name: "Precipitation",
        nameFormatted: "Precipitation  mm",
        measurementUnit: "mm",
        minValue: 0,
        maxValue: 50

    },
    precipitationProbability: {
        name: "Precipitation probability",
        nameFormatted: "Precipitation probability  %",
        measurementUnit: "%",
        minValue: 0,
        maxValue: 100
    },
    uv_index: {
        name: "UV index",
        nameFormatted: "UV index",
        measurementUnit: "",
        minValue: 0,
        maxValue: 15
    },
    windDirection: {
        name: "Wind direction",
        nameFormatted: "Wind direction  °",
        measurementUnit: "°",
        minValue: 0,
        maxValue: 359,
    },
}

// Function to generate Chart.js configuration based on forecast data and selected parameter
function getChartConfig(forecast: IForecastHourlyFormatted, selectedParam: ForecastKeys): ChartConfiguration {
    // Extracting data for the selected parameter from the forecast
    const data: number[] = Array.isArray(forecast[selectedParam])
        ? (forecast[selectedParam] as number[])
        : [];

    // Extracting measurement details for the selected parameter
    const measure: {name: string, measurementUnit: string, nameFormatted: string, minValue: number | ((arr: number[]) => number), maxValue: number | ((arr: number[]) => number)} = selectedParam
        ? paramMeasures[selectedParam]
        : {name: "Error", measurementUnit: "Error", nameFormatted: "Error", maxValue: 100, minValue: () => 0};

    // Calculating suggested min and max values for the chart based on measurement details
    const suggestedMin = typeof measure.minValue === 'function' ? measure.minValue(data) : measure.minValue;
    const suggestedMax = typeof measure.maxValue === 'function' ? measure.maxValue(data) : measure.maxValue;

    return {
        type: 'line',
        data: {
            labels: forecast.time,
            datasets: [{
                label: measure.nameFormatted,
                data: data,
                borderColor: 'red',
                borderWidth: 2.5,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
                        text: measure.nameFormatted,
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
                    suggestedMin,
                    suggestedMax,
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (tooltipItem: TooltipItem<any>) => {
                            return `${measure.name} ${tooltipItem.parsed.y} ${measure.measurementUnit}`;
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