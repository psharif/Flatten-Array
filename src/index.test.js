const flatten = require("./index.js");

///Checks to make sure the function exists
test("flatten function exists", () => {
  expect(typeof flatten).toEqual("function");
});

// Test 1 for 3 nested array. Should return [1,2,3,4];
test('Filters for the substring "speedy"', () => {
  expect(flatten([[1, 2, [3]], 4])).toEqual(
    expect.arrayContaining([1, 2, 3, 4])
  );
});

// Test 1 for 3 nested array. Should return [1,2,3,4];
test("Checks if array [[1, 2, [3]], 4] flattened equals [1,2,3,4]", () => {
  expect(flatten([[1, 2, [3]], 4])).toEqual(
    expect.arrayContaining([1, 2, 3, 4])
  );
});

/// Test 2 to 5 depth nested array. Should return [1,2,3,4,5,6,7,8,9]
test("Checks if array [[[1,2,[3]],4], [5,[6,[7,8,[9]]]]] flattened equals [1,2,3,4,5,6,7,8,9] ", () => {
  expect(flatten([[[1, 2, [3]], 4], [5, [6, [7, 8, [9]]]]])).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9])
  );
});

/// Test 3 to 10 depth nested array. Should return [1,2,3,4,5,6,7,8,9,10]
test("Checks if array [1, [[[2, 3, [[5, [6]]]]]], [[7, [[[8, [[9, [[10]]]]]]]]]]] flattened equals [1,2,3,4,5,6,7,8,9,10] ", () => {
  expect(
    flatten([1, [[[2, 3, [4, [5, [6]]]]]], [[7, [[[8, [[9, [[10]]]]]]]]]])
  ).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
});
