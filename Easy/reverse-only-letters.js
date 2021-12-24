// https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3974/

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

var reverseOnlyLetters = function (s) {
  let output = [];
  for (let i = 0; i < s.length; i++) {
    if (
      (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
    ) {
      output.push(s[s[s.length - 1 - i]]);
    } else {
      output.push(s[i]);
    }
  }
  return output;
};

console.log(reverseOnlyLetters("a-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
