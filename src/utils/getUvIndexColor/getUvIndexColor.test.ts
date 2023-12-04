import getUvIndexColor from "./getUvIndexColor";

describe("getUvIndexColor", () => {
    test("should return right colors", () => {
        expect(getUvIndexColor(0)).toBe("#41A94A")
        expect(getUvIndexColor(1)).toBe("#41A94A")
        expect(getUvIndexColor(2)).toBe("#41A94A")

        expect(getUvIndexColor(3)).toBe("#F5E50C")
        expect(getUvIndexColor(4)).toBe("#F5E50C")
        expect(getUvIndexColor(5)).toBe("#F5E50C")

        expect(getUvIndexColor(6)).toBe("#F17721")
        expect(getUvIndexColor(7)).toBe("#F17721")

        expect(getUvIndexColor(8)).toBe("#E22426")
        expect(getUvIndexColor(9)).toBe("#E22426")
        expect(getUvIndexColor(10)).toBe("#E22426")

        expect(getUvIndexColor(11)).toBe("#A88BC1")
        expect(getUvIndexColor(12)).toBe("#A88BC1")
    })

    test("should return black when index is incorrect", () => {
        expect(getUvIndexColor(-1)).toBe("#000000")
    })
})