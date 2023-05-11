export interface IPlace {
    geometry: { coordinates: number[] },
    properties: {
        address_line1: string,
        address_line2: string,
        formatted: string
        lat: number,
        lon: number,
    }
}

export interface IPlaceResponse {
    features: IPlace[],
    query: {text: string},
    type: string
}