import average from "./average";

describe("average", () => {
    test("should count average value of even array numbers", () => {
        expect(average([2,8,4])).toBe(5);
    })

    test("should count average value of odd array numbers", () => {
        expect(average([1, 3, 5])).toBe(4);
    })

    test("should count average value of all mixed numbers", () => {
        expect(average([2, 3, 5, 8, 1, 12])).toBe(5);
    })

    test("should return 0 if array is empty", () => {
        expect(average([])).toBe(0)
    })
})