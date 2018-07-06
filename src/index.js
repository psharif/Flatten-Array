// Write a piece of functioning code that will flatten an array of
// arbitrarily nested arrays of integers into a flat array of integers.
// e.g. [[1,2,[3]],4] -> [1,2,3,4].

function flatten(arr) {
  let result = [];
  arr.forEach(function(element) {
    //Check if element is an array.
    if (Array.isArray(element)) {
      /// If it is an array. Recursively call flatten on the sub array.
      /// When the returned subarray is flat.
      /// Concatenate the result array with the new flattened array.
      result = result.concat(flatten(element));
    } else {
      /// If its not an array push the element into the result array.
      result.push(element);
    }
  });
  /// Return the resulting array.
  return result;
}

module.exports = flatten;