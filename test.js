const { expect } = require("chai");
const alpha = require("./index");

describe("alpha detector", () => {
    it("should only accept strings", () => {
        let input = "jack"
        expect(typeof input).to.equal("string")
    })
})