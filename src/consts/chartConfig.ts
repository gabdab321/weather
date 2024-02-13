import {TooltipItem} from "chart.js";
import {ChartConfiguration} from "chart.js/auto";
import {IForecastHourlyFormatted} from "../models/IWeather";
import i18n from "../i18n";


export default getChartConfig;

export enum ForecastKeys  {
    CloudCover = 'cloudCover',
    Temp = 'temp',
    WindSpeed = "windSpeed",
    Precipitation = "precipitation",
    PrecipitationProbability = "precipitationProbability",
    UvIndex = "uv_index",
    WindDirection = "windDirection"
}

interface IParam {
    name: string,
    measurementUnit: string,
    minValue: number | ((arr: number[]) => number),
    maxValue: number | ((arr: number[]) => number)
}

// Function to generate Chart.js configuration based on forecast data and selected parameter
function getChartConfig(forecast: IForecastHourlyFormatted, selectedParam: ForecastKeys): ChartConfiguration {
    const t = i18n.t

    /* object containing measurement details for each weather parameter.
    *  inside function because of 't' function that refresh every time language changes */
    const paramMeasures: {[key: string]: IParam} = {
        temp: {
            name: t('temperature'),
            measurementUnit: "°C",
            minValue: (arr) => Math.round(Math.min(...arr)) - 5,
            maxValue: (arr) => Math.round(Math.max(...arr)) + 5
        },
        cloudCover: {
            name: t(`cloudCover`),
            measurementUnit: "%",
            minValue: 0,
            maxValue: 100
        },
        windSpeed: {
            name: t(`windSpeed`),
            measurementUnit: t("kilometersPerHour"),
            minValue: 0,
            maxValue: 40
        },
        precipitation: {
            name: t(`precipitation`),
            measurementUnit: t("millimeters"),
            minValue: 0,
            maxValue: 50

        },
        precipitationProbability: {
            name: t(`rainProbability`),
            measurementUnit: "%",
            minValue: 0,
            maxValue: 100
        },
        uv_index: {
            name: t(`UvIndex`),
            measurementUnit: "",
            minValue: 0,
            maxValue: 15
        },
        windDirection: {
            name: t(`windDirection`),
            measurementUnit: "°",
            minValue: 0,
            maxValue: 359,
        },
    }

    // Extracting data for the selected parameter from the forecast
    const data: number[] = Array.isArray(forecast[selectedParam])
        ? (forecast[selectedParam] as number[])
        : [];

    // Extracting measurement details for the selected parameter
    const measure: IParam =
        selectedParam
            ? paramMeasures[selectedParam]
            : {
                name: "Error",
                measurementUnit: "Error",
                maxValue: 100,
                minValue: () => 0
            };

    // Calculating suggested min and max values for the chart based on measurement details
    const suggestedMin = typeof measure.minValue === 'function' ? measure.minValue(data) : measure.minValue;
    const suggestedMax = typeof measure.maxValue === 'function' ? measure.maxValue(data) : measure.maxValue;

    return {
        type: 'line',
        data: {
            labels: forecast.time,
            datasets: [{
                label: `${measure.name}`,
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
                        text: t("time"),
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
                        text: `${measure.name}  ${measure.measurementUnit}`,
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