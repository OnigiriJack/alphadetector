const { expect } = require("chai");
const alpha = require("./index");

describe("alpha detector", () => {
    it("should only accept strings", () => {
        let bin = alpha.toBinary("Jack");
        expect(bin).to.equal("Buffer <4A, 61, 63, 6B>")
    })
})