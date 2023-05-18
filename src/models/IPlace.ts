export interface IPlace {
    geometry: { coordinates: number[] },
    properties: {
        address_line1: string,
        address_line2: string,
        city: string,
        country: string,
        state: string,
        formatted: string,
        lat: number,
        lon: number,
        place_id: number
    }
}

export interface IPlaceResponse {
    features: IPlace[],
    query: {text: string},
    type: string
}