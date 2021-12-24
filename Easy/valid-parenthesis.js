// https://leetcode.com/problems/valid-parentheses/

// NOTE This function has Time Complexity of O(2N) as it involves 2 loops
// var isValid = function (s) {
//   const arr1 = ["(}", "(]", "{)", "{]", "[)", "[}"];
//   const arr = arr1.map(ele => {
//     if (s.includes(ele)) return false;
//   });
//   if (arr.includes(false)) return false;
//   else return true;
// };

// NOTE This function has Time Complexity of O(N)
var isValid = function (s) {
  const arr1 = ["(}", "(]", "{)", "{]", "[)", "[}"];
  const array = ["(", "]", "{", ")", "}", "["];
  //   console.log(s.length);

  if (
    s[0] === "(" ||
    s[0] === "{" ||
    s[0] === "[" ||
    s[s.length - 1] === ")" ||
    s[s.length - 1] === "}" ||
    s[s.length - 1] === "]"
  )
    return false;

  const obj = {
    RO: 0,
    SO: 0,
    CO: 0,
    RC: 0,
    SC: 0,
    CC: 0,
  };
  s.split("").forEach(element => {
    if (element === "(") {
      obj.RO++;
    } else if (element === "{") {
      obj.CO++;
    } else if (element === "[") {
      obj.SO++;
    } else if (element === "]") {
      obj.SC++;
    } else if (element === ")") {
      obj.RC++;
    } else if (element === "}") {
      obj.CC++;
    }
  });

  if (obj.RO !== obj.RC || obj.SO !== obj.SC || obj.CO !== obj.CC) return false;

  if (!(s.length === 1)) {
    for (const item of arr1) {
      if (s.includes(item)) return false;
    }
    return true;
  }
  return false;
};

console.log(isValid("()[]{}")); //true
console.log(isValid("{[]}")); //true
console.log(isValid("([)]")); //false
console.log(isValid("}")); //false
console.log(isValid("((")); //false
console.log(isValid("(}")); //false
console.log(isValid(")}")); //false
console.log(isValid(")(")); //false
