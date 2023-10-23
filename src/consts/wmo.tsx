import Clear from "../assets/weather/clear.svg"
import Cloudy from "../assets/weather/cloudy.svg"
import PartlyCloudy from "../assets/weather/partly_cloudly.svg"
import Rain from "../assets/weather/rain.svg"
import Fog from "../assets/weather/fog.svg"
import Snow from "../assets/weather/snow.svg"
import Thunder from "../assets/weather/thunder.svg"
import {FunctionComponent, SVGAttributes} from "react";

interface wmoObject {
    [key: string]: {
        description: string
        descriptionEng: string
        descriptionUkr: string
        icon: string
    }
}

/* mock object with all possible WMO codes. WMO code used as a key to its data */
export const wmo: wmoObject = {
    "0": {description: "clear sky", descriptionEng: "Clear sky", descriptionUkr: "Ясно", icon: Clear},

    "1": {description: "mainly clear", descriptionEng: "Mainly clear", descriptionUkr: "Переважно ясно", icon: PartlyCloudy},
    "2": {description: "partly cloudy", descriptionEng: "Partly cloudy", descriptionUkr: "Мінлива хмарність", icon: PartlyCloudy},
    "3": {description: "overcast", descriptionEng: "Overcast", descriptionUkr: "Хмарно", icon: Cloudy},

    "45": {description: "fog", descriptionEng: "Fog", descriptionUkr: "Туман", icon: Fog},
    "48": {description: "fog", descriptionEng: "Fog", descriptionUkr: "Туман", icon: Fog},

    "51": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain},
    "53": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain},
    "55": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain},
    "56": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain},
    "57": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain},

    "61": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain},
    "63": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain},
    "65": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain},
    "66": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain},
    "67": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain},

    "71": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow},
    "73": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow},
    "75": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow},
    "77": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow},
    "85": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow},
    "86": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow},

    "80": {description: "rain showers", descriptionEng: "Rain showers", descriptionUkr: "Злива", icon: Rain},
    "81": {description: "rain showers", descriptionEng: "Rain showers", descriptionUkr: "Злива", icon: Rain},
    "82": {description: "rain showers", descriptionEng: "Rain showers", descriptionUkr: "Злива", icon: Rain},
    "95": {description: "rain showers", descriptionEng: "Rain showers", descriptionUkr: "Злива", icon: Rain},

    "96": {description: "thunderstorm", descriptionEng: "Thunder", descriptionUkr: "Гроза", icon: Thunder},
    "99": {description: "thunderstorm", descriptionEng: "Thunder", descriptionUkr: "Гроза", icon: Thunder},
}