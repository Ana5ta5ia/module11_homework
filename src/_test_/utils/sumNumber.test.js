import { sum } from "../../utils/sumNumber.js";

describe("tests for isPrime function", () => {
    let x = 7;
    let n = 2;

    it("invalid sum", () => {
        expect(sum(x, n)).toBe(15);
    });
});