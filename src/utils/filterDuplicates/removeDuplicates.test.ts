import {removeDuplicates} from "./removeDuplicates";
import {IPlace} from "../../models/IPlace";

describe("removeDuplicates", () => {
    test("should remove duplicates", () => {
        const inputArray = [
            {properties: {formatted: "A"}},
            {properties: {formatted: "A"}},
            {properties: {formatted: "B"}},
            {properties: {formatted: "B"}},
            {properties: {formatted: "A"}},
        ]

        const expectedArray = [
            {properties: {formatted: "A"}},
            {properties: {formatted: "B"}}
        ]

        expect(removeDuplicates(inputArray as IPlace[])).toEqual(expectedArray)
    })

    test("should handle empty arrays", () => {
        expect(removeDuplicates([])).toEqual([])
    })

    test("should handle array with no duplicates", () => {
        const inputArray = [
            {properties: {formatted: "A"}},
            {properties: {formatted: "B"}},
            {properties: {formatted: "C"}},
        ]

        expect(inputArray).toBe(inputArray)
    })
})