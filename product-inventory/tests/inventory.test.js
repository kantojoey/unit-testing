const inventory = require("../inventory.js");

const products = [
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 200 }
];

describe("The calculateDiscount() function ", function () {
  //positive case
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

describe("The filterProducts() function should", function(){
//positive case
    test("filters products correctly by price", function(){
        expect(inventory.filterProducts(products, product => product.price < 50)).toStrictEqual([ { name: 'Mouse', price: 25 } ]);
    });
//negative case
    test("handles input that is not an array", function(){
        expect(inventory.filterProducts("products", product => product.price < 50)).toStrictEqual([]);
    });
//edge case
    test("handles an empty array gracefully", function(){
        expect(inventory.filterProducts([], product => product.price === 0)).toEqual([]);
    });
});

describe("The sortInventory() function should", function(){
//positive case
    test("handles object and sorts by price", function(){
        expect(inventory.sortInventory(products, "price")).toStrictEqual([
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 200 }
]);
    });
//negative case
    test("handles invalid input gracefully", function(){
        expect(inventory.sortInventory("products", "price")).toStrictEqual([]);
    });
//edge case
    test("handled empty but valid input", function(){
        expect(inventory.sortInventory([], "price")).toStrictEqual([]);
    });
});