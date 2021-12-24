function countGoodSubstrings(s) {
  let count = 0;
  for (let i = 0; i + 3 <= s.length; i++) {
    let substring = s.substring(i, i + 3);
    if (dup(substring)) count++;
  }
  return count;
}

function dup(str) {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        return false;
      }
    }
  }
  return true;
}

console.log(countGoodSubstrings("xyzzaz")); // 1
console.log(countGoodSubstrings("aababcabc")); // 4
