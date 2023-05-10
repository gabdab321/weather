import {formatResponse} from "./formatResponse";
import {formatted1, raw1, formatted3, raw3} from "./mock";

describe("formatResponse",() => {
    test("should format 1-day forecast right", () => {
        expect(formatResponse(raw1)).toEqual(formatted1)
    })

    test("should format 3-day forecast right", () => {
        expect(formatResponse(raw3)).toEqual(formatted3)
    })
})