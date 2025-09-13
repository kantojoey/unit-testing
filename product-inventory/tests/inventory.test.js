const inventory = require("../inventory.js");

describe("The calculateDiscount() function ", function () {
  // positive case
  test("applies a valid discount rate", () => {
    expect(inventory.calculateDiscount(100, 0.1)).toBe(90);
  });
  test("applies a valid discount rate", () => {
    expect(inventory.calculateDiscount(100, 0.2)).toBe(80);
  });

  //negative case
  test("handles an invalid discount rate gracefully", () => {
    expect(inventory.calculateDiscount(100, -0.1)).toBe(null);
  });
  test("handles an invalid discount rate gracefully", () => {
    expect(inventory.calculateDiscount(100, 1.1)).toBe(null);
  });

  //edge case
  test("handles edge case with price of 0", () => {
    expect(inventory.calculateDiscount(0, 0.2)).toBe(0);
  });
  test("handles edge case with discount rate of 0", () => {
    expect(inventory.calculateDiscount(100, 0)).toBe(100);
  });
});