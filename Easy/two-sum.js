function twoSums(nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) return [i, j];
    }
  }
}

console.log(twoSums([2, 5, 5, 11], 10));
console.log(twoSums([3, 2, 3], 6));
