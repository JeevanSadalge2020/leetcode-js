var isPalindrome = function (x) {
  return Number(x.toString().split("").reverse().join("")) === x;
};

console.log(isPalindrome(121));
