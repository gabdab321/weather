import Clear from "../assets/weather/clear.svg"
import Cloudy from "../assets/weather/cloudy.svg"
import PartlyCloudy from "../assets/weather/partly_cloudly.svg"
import Rain from "../assets/weather/rain.svg"
import Fog from "../assets/weather/fog.svg"
import Snow from "../assets/weather/snow.svg"
import Thunder from "../assets/weather/thunder.svg"

import ClearGif from "../assets/weatherGifs/sunny.gif";
import PartlyCloudyGif from "../assets/weatherGifs/partlyCloud.gif";
import CloudyGif from "../assets/weatherGifs/cloudy.gif";
import FogGif from "../assets/weatherGifs/fog.gif";
import RainGif from "../assets/weatherGifs/rain.gif";
import SnowGif from "../assets/weatherGifs/snowfall.gif";
import ThunderGif from "../assets/weatherGifs/thunder.gif";

import ClearMobileGif from "../assets/weatherGifs/sunny-mobile.gif";
import FogMobileGif from "../assets/weatherGifs/fog-mobile.gif";
import RainMobileGif from "../assets/weatherGifs/rain-mobile.gif";
import SnowMobileGif from "../assets/weatherGifs/snowfall-mobile.gif";
import ThunderMobileGif from "../assets/weatherGifs/thunder-mobile.gif";

interface wmoObject {
    [key: string]: {
        description: string
        descriptionEng: string
        descriptionUkr: string
        icon: string,
        gifPath: string,
        gifMobilePath: string
    }
}

/* mock object with all possible WMO codes. WMO code used as a key to its data */
export const wmo: wmoObject = {
    "0": {description: "clear sky", descriptionEng: "Clear sky", descriptionUkr: "Ясно", icon: Clear, gifPath: ClearGif, gifMobilePath: ClearMobileGif},

    "1": {description: "mainly clear", descriptionEng: "Mainly clear", descriptionUkr: "Переважно ясно", icon: PartlyCloudy, gifPath: ClearGif, gifMobilePath: ClearMobileGif,},
    "2": {description: "partly cloudy", descriptionEng: "Partly cloudy", descriptionUkr: "Мінлива хмарність", icon: PartlyCloudy, gifPath: PartlyCloudyGif, gifMobilePath:PartlyCloudyGif},
    "3": {description: "overcast", descriptionEng: "Overcast", descriptionUkr: "Хмарно", icon: Cloudy, gifPath: CloudyGif, gifMobilePath: CloudyGif},

    "45": {description: "fog", descriptionEng: "Fog", descriptionUkr: "Туман", icon: Fog, gifPath: FogGif, gifMobilePath: FogMobileGif},
    "48": {description: "fog", descriptionEng: "Fog", descriptionUkr: "Туман", icon: Fog, gifPath: FogGif, gifMobilePath: FogMobileGif},

    "51": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "53": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "55": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "56": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "57": {description: "drizzle", descriptionEng: "Drizzle", descriptionUkr: "Мряка", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},

    "61": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "63": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "65": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "66": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "67": {description: "rain", descriptionEng: "Rain", descriptionUkr: "Дощ", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},

    "71": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow, gifPath: SnowGif, gifMobilePath: SnowMobileGif},
    "73": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow, gifPath: SnowGif, gifMobilePath: SnowMobileGif},
    "75": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow, gifPath: SnowGif, gifMobilePath: SnowMobileGif},
    "77": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow, gifPath: SnowGif, gifMobilePath: SnowMobileGif},
    "85": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow, gifPath: SnowGif, gifMobilePath: SnowMobileGif},
    "86": {description: "snow fall", descriptionEng: "Snow fall", descriptionUkr: "Снігопад", icon: Snow, gifPath: SnowGif, gifMobilePath: SnowMobileGif},

    "80": {description: "rain showers", descriptionEng: "Rain showers", descriptionUkr: "Злива", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "81": {description: "rain showers", descriptionEng: "Rain showers", descriptionUkr: "Злива", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "82": {description: "rain showers", descriptionEng: "Rain showers", descriptionUkr: "Злива", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},
    "95": {description: "rain showers", descriptionEng: "Rain showers", descriptionUkr: "Злива", icon: Rain, gifPath: RainGif, gifMobilePath: RainMobileGif},

    "96": {description: "thunderstorm", descriptionEng: "Thunder", descriptionUkr: "Гроза", icon: Thunder, gifPath: ThunderGif, gifMobilePath: ThunderMobileGif},
    "99": {description: "thunderstorm", descriptionEng: "Thunder", descriptionUkr: "Гроза", icon: Thunder, gifPath: ThunderGif, gifMobilePath: ThunderMobileGif},
}