const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanSpecials = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var romanToInt = function (input) {
  let array = [];
  for (let item of Object.keys(romanSpecials)) {
    while (input.includes(item)) {
      input = input.replace(item, "");
      array.push(romanSpecials[item]);
    }
  }
  if (array.length !== 0) {
    return (
      array.reduce((acc, cur) => acc + cur) +
      sumForInputWithSingleRomanChar(input)
    );
  } else return sumForInputWithSingleRomanChar(input);
};

function sumForInputWithSingleRomanChar(input) {
  const arr = input.split("");
  const array = arr.map(item => {
    if (roman.hasOwnProperty(item)) {
      return roman[item];
    } else return "";
  });

  return array.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

console.log(romanToInt("XXX"));
console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("LVIII"));
