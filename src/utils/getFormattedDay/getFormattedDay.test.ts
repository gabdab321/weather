import getFormattedDay from "./getFormattedDay";

describe("getFormattedDay function", () => {
    test("should return 'Mon'", () => {
        expect(getFormattedDay("en", "2023-07-24")).toBe("Mon")
    })

    test("should return 'Пн'", () => {
        expect(getFormattedDay("uk", "2023-07-24")).toBe("Пн")
    })

    test("should return 'Sun'", () => {
        expect(getFormattedDay("en", "2023-07-23")).toBe("Sun")
    })
})