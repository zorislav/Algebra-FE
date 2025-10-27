const maxNumber = require("../script.js");

const testArray = [1, 4, 5, 89, 43, 2, -1];

test("Get max number", () => {
  expect(maxNumber(testArray)).toBe(89);
});

test("Get number", () => {
  expect(maxNumber(testArray)).not.toBeNaN();
});

test("Mock primjer", () => {
  const myMock = jest.fn(function (x) {
    return x + 10;
  });

  expect(myMock(20)).toBe(30); //da stavimo (myMock(10)), test nebi prošao
});
