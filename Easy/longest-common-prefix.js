// https://leetcode.com/problems/longest-common-prefix

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefixx = function (strs) {
  let output = "";
  let count = 0;
  const one = strs[count];
  let res = true;

  while (res === true) {
    res = strs.every(str =>
      one.charAt(count) === str.charAt(count) ? true : false
    );
    if (res === true) {
      output = output.concat(one.charAt(count));
      count++;
    }
  }
  return output;
};

var longestCommonPrefixx = function (strs) {
  let output = "";
  let count = 0;
  const one = strs[count];
  let res = true;

  while (res === true) {
    for (let i = 1; i < strs.length; i++) {}
    if (res === true) {
      output = output.concat(one.charAt(count));
      count++;
    }
  }
  return output;
};
// FLOWER FLOW FLIGHT   i(0,3)  j(0,2)  o = F
var longestCommonPrefi = function (strs) {
  let output = [];
  const { minLength, strWithMinLength } = minLengthStr(strs);
  console.log(minLength);
  for (let i = 0; i < minLength; i++) {
    for (let j = i; j < strs.length; j++) {
      if (strWithMinLength.charAt(i) === strs[j].charAt(i)) {
        console.log("I", i, "J", j);
        console.log("compare", strWithMinLength.charAt(i), strs[j].charAt(i));
        output.push(strWithMinLength.charAt(i));
        console.log(output);
        break;
      } else return output;
    }
  }
  return output;
};

function minLengthStr(arr) {
  let l = Infinity;
  let a = arr[0];
  for (let str of arr) {
    if (str.length < a.length) {
      a = str;
    }
  }
  return {
    minLength: a.length,
    index: arr.indexOf(a),
    strWithMinLength: a,
  };
}

console.log(longestCommonPrefi(["floower", "floow", "flooight"]));
// console.log(minLengthStr(["flower", "floo", "flight"]));
// console.log(longestCommonPrefix(["floower", "floow", "flight"]));
// console.log(longestCommonPrefixx(["floower", "flooow", "floight"]));
// console.log(longestCommonPrefi(["fl", "fl", "floww"]));
// console.log(longestCommonPrefi(["fwer", "klow", "oloight"]));
