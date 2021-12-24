function targetIndices(nums, target) {
  const sortedArr = sort(nums);
  return findIndexOf(sortedArr, target);
}

//FUNCTION TO SORT THE ARRAY
function sort(arr) {
  let isSwapped;
  let passCount = 0;
  do {
    passCount++;
    isSwapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
  return arr;
}

// FUNCTION TO FIND THE INDEX OF TARGET
function findIndexOf(arr, target) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      array.push(i);
    }
  }
  return array;
}

let nums1 = [1, 2, 5, 2, 3];
let target1 = 2;
console.log(targetIndices(nums1, target1));

let nums2 = [1, 2, 5, 2, 3];
let target2 = 3;
console.log(targetIndices(nums2, target2));

let nums3 = [1, 2, 5, 2, 3];
let target3 = 5;
console.log(targetIndices(nums3, target3));

let nums5 = [1, 2, 5, 2, 3];
let target5 = 4;
console.log(targetIndices(nums5, target5));

let nums4 = [
  48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77,
  15, 38,
];
let target4 = 6;
console.log(targetIndices(nums4, target4));
