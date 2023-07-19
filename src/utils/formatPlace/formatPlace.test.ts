import {formatPlace} from "./formatPlace";
import {IPlace} from "../../models/IPlace";

const place1 = {
    properties: {
        city: "Київ",
        state: "Київська область",
        country: "Україна",
    }
}

const place2 = {
    properties: {
        city: "Буча",
        state: "Київська область",
    }
}

const place3 = {
    properties: {
        city: "Ужгород",
        country: "Україна",
    }
}
describe("formatPlace function", () => {
    test("should format place", () => {
        expect(formatPlace(place1 as IPlace)).toBe("Київ, Київська область, Україна")
    })

    test("should format place without country prop", () => {
        expect(formatPlace(place2 as IPlace)).toBe("Буча, Київська область")
    })

    test("should format place without country prop", () => {
        expect(formatPlace(place3 as IPlace)).toBe("Ужгород, Україна")
    })
})