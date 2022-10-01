// const chai = require("chai");
// const chaiHttp = require("chai-http");
//const server = require("../server");

// chai.should();
// chai.use(chaiHttp);
// describe("Users API", () => {});

var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
