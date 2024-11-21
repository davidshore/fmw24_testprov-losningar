const calculateSum = require("./question5");

test("Summan av en array med nummer", () => {
  const arr = [2, 3, 4];

  expect(calculateSum(arr)).toBe(9);
});
