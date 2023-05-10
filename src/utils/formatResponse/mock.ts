import {IForecastFormatted} from "../../models/IWeather";

export const raw1 = {
    "latitude": 50.4375,
    "longitude": 30.5,
    "hourly": {
        "time": [
            "2023-05-04T00:00",
            "2023-05-04T01:00",
            "2023-05-04T02:00",
            "2023-05-04T03:00",
            "2023-05-04T04:00",
            "2023-05-04T05:00",
            "2023-05-04T06:00",
            "2023-05-04T07:00",
            "2023-05-04T08:00",
            "2023-05-04T09:00",
            "2023-05-04T10:00",
            "2023-05-04T11:00",
            "2023-05-04T12:00",
            "2023-05-04T13:00",
            "2023-05-04T14:00",
            "2023-05-04T15:00",
            "2023-05-04T16:00",
            "2023-05-04T17:00",
            "2023-05-04T18:00",
            "2023-05-04T19:00",
            "2023-05-04T20:00",
            "2023-05-04T21:00",
            "2023-05-04T22:00",
            "2023-05-04T23:00"
        ],
        "temperature_2m": [13.3, 12.4, 11.7, 11.2, 10.6, 10.2, 9.9, 9.9, 10.7, 11.9, 13.2, 14.8, 15.7, 16.7, 17.2, 17.5, 17.1, 15.9, 14.8, 14.4, 13.7, 12.9, 12, 11],
        "precipitation": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "weathercode": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        "cloudcover": [76, 100, 100, 100, 100, 100, 100, 93, 100, 100, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        "windspeed_10m": [7.5, 6.3, 5.7, 5.6, 5.2, 5.2, 4.2, 5.2, 4.6, 5.4, 3.6, 3.2, 4.7, 3.7, 4.2, 5.5, 7.3, 9, 9.8, 9.4, 11.2, 10.8, 11.3, 10.7]
    },
    "daily": {
        "time": [
            "2023-05-04"
        ],
        "weathercode": [3],
        "temperature_2m_max": [17.5],
        "temperature_2m_min": [9.9],
        "precipitation_sum": [0]
    }
}

export const formatted1 = {
    "latitude": 50.4375,
    "longitude": 30.5,
    "forecast": {
        "2023-05-04": {
            "hourly": [
                {
                    "temp": 13.3,
                    "cloudCover": 76,
                    "weatherCode": 3,
                    "windSpeed": 7.5
                },
                {
                    "temp": 12.4,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 6.3
                },
                {
                    "temp": 11.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.7
                },
                {
                    "temp": 11.2,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.6
                },
                {
                    "temp": 10.6,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.2
                },
                {
                    "temp": 10.2,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.2
                },
                {
                    "temp": 9.9,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 4.2
                },
                {
                    "temp": 9.9,
                    "cloudCover": 93,
                    "weatherCode": 3,
                    "windSpeed": 5.2
                },
                {
                    "temp": 10.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 4.6
                },
                {
                    "temp": 11.9,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.4
                },
                {
                    "temp": 13.2,
                    "cloudCover": 98,
                    "weatherCode": 3,
                    "windSpeed": 3.6
                },
                {
                    "temp": 14.8,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 3.2
                },
                {
                    "temp": 15.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 4.7
                },
                {
                    "temp": 16.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 3.7
                },
                {
                    "temp": 17.2,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 4.2
                },
                {
                    "temp": 17.5,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.5
                },
                {
                    "temp": 17.1,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 7.3
                },
                {
                    "temp": 15.9,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 9
                },
                {
                    "temp": 14.8,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 9.8
                },
                {
                    "temp": 14.4,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 9.4
                },
                {
                    "temp": 13.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 11.2
                },
                {
                    "temp": 12.9,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 10.8
                },
                {
                    "temp": 12,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 11.3
                },
                {
                    "temp": 11,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 10.7
                }
            ],
            "daily": {
                "precipitation": 0,
                "tempMax": 17.5,
                "tempMin": 9.9,
                "weatherCode": 3
            }
        }
    }
}

export const raw3 = {
    "latitude": 50.4375,
    "longitude": 30.5,
    "generationtime_ms": 2.3779869079589844,
    "utc_offset_seconds": 10800,
    "timezone": "Europe/Kiev",
    "timezone_abbreviation": "EEST",
    "elevation": 169,
    "hourly_units": {
    "time": "iso8601",
        "temperature_2m": "°C",
        "precipitation": "mm",
        "weathercode": "wmo code",
        "cloudcover": "%",
        "windspeed_10m": "km/h"
},
    "hourly": {
    "time": [
        "2023-05-04T00:00",
        "2023-05-04T01:00",
        "2023-05-04T02:00",
        "2023-05-04T03:00",
        "2023-05-04T04:00",
        "2023-05-04T05:00",
        "2023-05-04T06:00",
        "2023-05-04T07:00",
        "2023-05-04T08:00",
        "2023-05-04T09:00",
        "2023-05-04T10:00",
        "2023-05-04T11:00",
        "2023-05-04T12:00",
        "2023-05-04T13:00",
        "2023-05-04T14:00",
        "2023-05-04T15:00",
        "2023-05-04T16:00",
        "2023-05-04T17:00",
        "2023-05-04T18:00",
        "2023-05-04T19:00",
        "2023-05-04T20:00",
        "2023-05-04T21:00",
        "2023-05-04T22:00",
        "2023-05-04T23:00",
        "2023-05-05T00:00",
        "2023-05-05T01:00",
        "2023-05-05T02:00",
        "2023-05-05T03:00",
        "2023-05-05T04:00",
        "2023-05-05T05:00",
        "2023-05-05T06:00",
        "2023-05-05T07:00",
        "2023-05-05T08:00",
        "2023-05-05T09:00",
        "2023-05-05T10:00",
        "2023-05-05T11:00",
        "2023-05-05T12:00",
        "2023-05-05T13:00",
        "2023-05-05T14:00",
        "2023-05-05T15:00",
        "2023-05-05T16:00",
        "2023-05-05T17:00",
        "2023-05-05T18:00",
        "2023-05-05T19:00",
        "2023-05-05T20:00",
        "2023-05-05T21:00",
        "2023-05-05T22:00",
        "2023-05-05T23:00",
        "2023-05-06T00:00",
        "2023-05-06T01:00",
        "2023-05-06T02:00",
        "2023-05-06T03:00",
        "2023-05-06T04:00",
        "2023-05-06T05:00",
        "2023-05-06T06:00",
        "2023-05-06T07:00",
        "2023-05-06T08:00",
        "2023-05-06T09:00",
        "2023-05-06T10:00",
        "2023-05-06T11:00",
        "2023-05-06T12:00",
        "2023-05-06T13:00",
        "2023-05-06T14:00",
        "2023-05-06T15:00",
        "2023-05-06T16:00",
        "2023-05-06T17:00",
        "2023-05-06T18:00",
        "2023-05-06T19:00",
        "2023-05-06T20:00",
        "2023-05-06T21:00",
        "2023-05-06T22:00",
        "2023-05-06T23:00"
    ],
        "temperature_2m": [
        13.3,
        12.4,
        11.7,
        11.2,
        10.6,
        10.2,
        9.9,
        9.9,
        10.7,
        11.9,
        13.2,
        14.8,
        15.7,
        16.7,
        17.2,
        17.5,
        17.1,
        15.9,
        14.8,
        14.4,
        13.7,
        12.9,
        12,
        11,
        10.2,
        9.7,
        9.2,
        8.8,
        8.6,
        8.5,
        8.4,
        8.6,
        9,
        9.1,
        10,
        10.6,
        11.7,
        13.4,
        14.7,
        15.3,
        15.5,
        15.6,
        15.5,
        14.9,
        13.9,
        12.8,
        11.7,
        10.8,
        9.9,
        7.8,
        6.8,
        6.1,
        5.6,
        5.4,
        5.5,
        5.8,
        6.5,
        7.8,
        9.3,
        10.5,
        11.4,
        12.1,
        12.5,
        12.8,
        12.8,
        12.6,
        12.2,
        11.4,
        10.3,
        9.3,
        8.2,
        7
    ],
        "precipitation": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
        "weathercode": [
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        2,
        3,
        3,
        3,
        2,
        3,
        3,
        3,
        1,
        2,
        3,
        1,
        1,
        2,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        1
    ],
        "cloudcover": [
        76,
        100,
        100,
        100,
        100,
        100,
        100,
        93,
        100,
        100,
        98,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        97,
        94,
        89,
        96,
        87,
        98,
        91,
        93,
        100,
        96,
        96,
        86,
        80,
        89,
        87,
        90,
        72,
        83,
        97,
        88,
        44,
        71,
        82,
        33,
        12,
        44,
        31,
        44,
        70,
        64,
        74,
        58,
        47,
        22,
        0,
        23,
        6,
        20,
        8,
        8,
        11,
        11,
        22,
        24,
        7,
        5,
        4,
        34
    ],
        "windspeed_10m": [
        7.5,
        6.3,
        5.7,
        5.6,
        5.2,
        5.2,
        4.2,
        5.2,
        4.6,
        5.4,
        3.6,
        3.2,
        4.7,
        3.7,
        4.2,
        5.5,
        7.3,
        9,
        9.8,
        9.4,
        11.2,
        10.8,
        11.3,
        10.7,
        10.1,
        7.8,
        7.8,
        8.3,
        6.3,
        5.1,
        6.5,
        8.7,
        9.3,
        9.3,
        8.6,
        8.2,
        7.9,
        7.3,
        7.1,
        6.6,
        6.5,
        8.3,
        9.1,
        9,
        7.3,
        6.9,
        6.6,
        5.5,
        7,
        11.3,
        10.5,
        9.3,
        8.9,
        10.2,
        9.9,
        10.3,
        11.6,
        11.4,
        12.2,
        13,
        12.6,
        12.1,
        12,
        11.6,
        12,
        11.7,
        11.7,
        11.5,
        9.7,
        7.4,
        7.1,
        7.6
    ]
},
    "daily_units": {
    "time": "iso8601",
        "weathercode": "wmo code",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C",
        "precipitation_sum": "mm"
},
    "daily": {
    "time": [
        "2023-05-04",
        "2023-05-05",
        "2023-05-06"
    ],
        "weathercode": [
        3,
        3,
        2
    ],
        "temperature_2m_max": [
        17.5,
        15.6,
        12.8
    ],
        "temperature_2m_min": [
        9.9,
        8.4,
        5.4
    ],
        "precipitation_sum": [
        0,
        0.1,
        0
    ]
}
}

export const formatted3 = {
    "latitude": 50.4375,
    "longitude": 30.5,
    "forecast": {
        "2023-05-04": {
            "hourly": [
                {
                    "temp": 13.3,
                    "cloudCover": 76,
                    "weatherCode": 3,
                    "windSpeed": 7.5
                },
                {
                    "temp": 12.4,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 6.3
                },
                {
                    "temp": 11.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.7
                },
                {
                    "temp": 11.2,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.6
                },
                {
                    "temp": 10.6,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.2
                },
                {
                    "temp": 10.2,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.2
                },
                {
                    "temp": 9.9,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 4.2
                },
                {
                    "temp": 9.9,
                    "cloudCover": 93,
                    "weatherCode": 3,
                    "windSpeed": 5.2
                },
                {
                    "temp": 10.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 4.6
                },
                {
                    "temp": 11.9,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.4
                },
                {
                    "temp": 13.2,
                    "cloudCover": 98,
                    "weatherCode": 3,
                    "windSpeed": 3.6
                },
                {
                    "temp": 14.8,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 3.2
                },
                {
                    "temp": 15.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 4.7
                },
                {
                    "temp": 16.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 3.7
                },
                {
                    "temp": 17.2,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 4.2
                },
                {
                    "temp": 17.5,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 5.5
                },
                {
                    "temp": 17.1,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 7.3
                },
                {
                    "temp": 15.9,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 9
                },
                {
                    "temp": 14.8,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 9.8
                },
                {
                    "temp": 14.4,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 9.4
                },
                {
                    "temp": 13.7,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 11.2
                },
                {
                    "temp": 12.9,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 10.8
                },
                {
                    "temp": 12,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 11.3
                },
                {
                    "temp": 11,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 10.7
                }
            ],
            "daily": {
                "precipitation": 0,
                "tempMax": 17.5,
                "tempMin": 9.9,
                "weatherCode": 3
            }
        },
        "2023-05-05": {
            "hourly": [
                {
                    "temp": 10.2,
                    "cloudCover": 97,
                    "weatherCode": 3,
                    "windSpeed": 10.1
                },
                {
                    "temp": 9.7,
                    "cloudCover": 94,
                    "weatherCode": 3,
                    "windSpeed": 7.8
                },
                {
                    "temp": 9.2,
                    "cloudCover": 89,
                    "weatherCode": 3,
                    "windSpeed": 7.8
                },
                {
                    "temp": 8.8,
                    "cloudCover": 96,
                    "weatherCode": 3,
                    "windSpeed": 8.3
                },
                {
                    "temp": 8.6,
                    "cloudCover": 87,
                    "weatherCode": 3,
                    "windSpeed": 6.3
                },
                {
                    "temp": 8.5,
                    "cloudCover": 98,
                    "weatherCode": 3,
                    "windSpeed": 5.1
                },
                {
                    "temp": 8.4,
                    "cloudCover": 91,
                    "weatherCode": 3,
                    "windSpeed": 6.5
                },
                {
                    "temp": 8.6,
                    "cloudCover": 93,
                    "weatherCode": 3,
                    "windSpeed": 8.7
                },
                {
                    "temp": 9,
                    "cloudCover": 100,
                    "weatherCode": 3,
                    "windSpeed": 9.3
                },
                {
                    "temp": 9.1,
                    "cloudCover": 96,
                    "weatherCode": 3,
                    "windSpeed": 9.3
                },
                {
                    "temp": 10,
                    "cloudCover": 96,
                    "weatherCode": 3,
                    "windSpeed": 8.6
                },
                {
                    "temp": 10.6,
                    "cloudCover": 86,
                    "weatherCode": 3,
                    "windSpeed": 8.2
                },
                {
                    "temp": 11.7,
                    "cloudCover": 80,
                    "weatherCode": 2,
                    "windSpeed": 7.9
                },
                {
                    "temp": 13.4,
                    "cloudCover": 89,
                    "weatherCode": 3,
                    "windSpeed": 7.3
                },
                {
                    "temp": 14.7,
                    "cloudCover": 87,
                    "weatherCode": 3,
                    "windSpeed": 7.1
                },
                {
                    "temp": 15.3,
                    "cloudCover": 90,
                    "weatherCode": 3,
                    "windSpeed": 6.6
                },
                {
                    "temp": 15.5,
                    "cloudCover": 72,
                    "weatherCode": 2,
                    "windSpeed": 6.5
                },
                {
                    "temp": 15.6,
                    "cloudCover": 83,
                    "weatherCode": 3,
                    "windSpeed": 8.3
                },
                {
                    "temp": 15.5,
                    "cloudCover": 97,
                    "weatherCode": 3,
                    "windSpeed": 9.1
                },
                {
                    "temp": 14.9,
                    "cloudCover": 88,
                    "weatherCode": 3,
                    "windSpeed": 9
                },
                {
                    "temp": 13.9,
                    "cloudCover": 44,
                    "weatherCode": 1,
                    "windSpeed": 7.3
                },
                {
                    "temp": 12.8,
                    "cloudCover": 71,
                    "weatherCode": 2,
                    "windSpeed": 6.9
                },
                {
                    "temp": 11.7,
                    "cloudCover": 82,
                    "weatherCode": 3,
                    "windSpeed": 6.6
                },
                {
                    "temp": 10.8,
                    "cloudCover": 33,
                    "weatherCode": 1,
                    "windSpeed": 5.5
                }
            ],
            "daily": {
                "precipitation": 0.1,
                "tempMax": 15.6,
                "tempMin": 8.4,
                "weatherCode": 3
            }
        },
        "2023-05-06": {
            "hourly": [
                {
                    "temp": 9.9,
                    "cloudCover": 12,
                    "weatherCode": 1,
                    "windSpeed": 7
                },
                {
                    "temp": 7.8,
                    "cloudCover": 44,
                    "weatherCode": 2,
                    "windSpeed": 11.3
                },
                {
                    "temp": 6.8,
                    "cloudCover": 31,
                    "weatherCode": 1,
                    "windSpeed": 10.5
                },
                {
                    "temp": 6.1,
                    "cloudCover": 44,
                    "weatherCode": 2,
                    "windSpeed": 9.3
                },
                {
                    "temp": 5.6,
                    "cloudCover": 70,
                    "weatherCode": 2,
                    "windSpeed": 8.9
                },
                {
                    "temp": 5.4,
                    "cloudCover": 64,
                    "weatherCode": 2,
                    "windSpeed": 10.2
                },
                {
                    "temp": 5.5,
                    "cloudCover": 74,
                    "weatherCode": 2,
                    "windSpeed": 9.9
                },
                {
                    "temp": 5.8,
                    "cloudCover": 58,
                    "weatherCode": 2,
                    "windSpeed": 10.3
                },
                {
                    "temp": 6.5,
                    "cloudCover": 47,
                    "weatherCode": 2,
                    "windSpeed": 11.6
                },
                {
                    "temp": 7.8,
                    "cloudCover": 22,
                    "weatherCode": 1,
                    "windSpeed": 11.4
                },
                {
                    "temp": 9.3,
                    "cloudCover": 0,
                    "weatherCode": 0,
                    "windSpeed": 12.2
                },
                {
                    "temp": 10.5,
                    "cloudCover": 23,
                    "weatherCode": 1,
                    "windSpeed": 13
                },
                {
                    "temp": 11.4,
                    "cloudCover": 6,
                    "weatherCode": 0,
                    "windSpeed": 12.6
                },
                {
                    "temp": 12.1,
                    "cloudCover": 20,
                    "weatherCode": 1,
                    "windSpeed": 12.1
                },
                {
                    "temp": 12.5,
                    "cloudCover": 8,
                    "weatherCode": 1,
                    "windSpeed": 12
                },
                {
                    "temp": 12.8,
                    "cloudCover": 8,
                    "weatherCode": 1,
                    "windSpeed": 11.6
                },
                {
                    "temp": 12.8,
                    "cloudCover": 11,
                    "weatherCode": 1,
                    "windSpeed": 12
                },
                {
                    "temp": 12.6,
                    "cloudCover": 11,
                    "weatherCode": 1,
                    "windSpeed": 11.7
                },
                {
                    "temp": 12.2,
                    "cloudCover": 22,
                    "weatherCode": 1,
                    "windSpeed": 11.7
                },
                {
                    "temp": 11.4,
                    "cloudCover": 24,
                    "weatherCode": 1,
                    "windSpeed": 11.5
                },
                {
                    "temp": 10.3,
                    "cloudCover": 7,
                    "weatherCode": 0,
                    "windSpeed": 9.7
                },
                {
                    "temp": 9.3,
                    "cloudCover": 5,
                    "weatherCode": 0,
                    "windSpeed": 7.4
                },
                {
                    "temp": 8.2,
                    "cloudCover": 4,
                    "weatherCode": 0,
                    "windSpeed": 7.1
                },
                {
                    "temp": 7,
                    "cloudCover": 34,
                    "weatherCode": 1,
                    "windSpeed": 7.6
                }
            ],
            "daily": {
                "precipitation": 0,
                "tempMax": 12.8,
                "tempMin": 5.4,
                "weatherCode": 2
            }
        }
    }
}