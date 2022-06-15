const smallestDiff = (arr1, arr2) => {
  //Starting out with setting the initial minimum as the difference (as a positive number) between the first item in each array
  let currentMin = Math.abs(arr1[0] - arr2[0]);
  // Then the outer loop goes through each element of the first array
  for (let i = 0; i < arr1.length; i++) {
    // And for each element in the first array, the inner loop will go over each element of the second array
    for (let j = 0; j < arr2.length; j++) {
      // Checking the difference between the elements, and if the difference (as a positive number) is smaller than the currentMin, it swaps itself as the value for currentMin
      if (Math.abs(arr1[i] - arr2[j]) < currentMin) {
        currentMin = Math.abs(arr1[i] - arr2[j]);
      }
    }
  }
  // After looping through the entire first array (and through the second for each element of the first), returning the smallest difference
  return currentMin;
};

console.log(
  smallestDiff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]),
  "should be 3"
);
console.log(
  smallestDiff([1, 2, 3, 4, 5, 9], [32, 45, 16, 40, -200]),
  "should be 7"
);
