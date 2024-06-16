const maxNumber = require ('../script')

const testArray = [1,4,5,89,43,2,-1];

testArray("Get max number", () => {
  expect(maxNumber(testArray).toBe(89));
});

testArray("Get number", () => {
  expect(maxNumber(testArray)).not.toBeNan();
});
