import * as assert from "assert";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.strictEqual([0].indexOf(1), -1, "Should be true");
    });
  });
});
