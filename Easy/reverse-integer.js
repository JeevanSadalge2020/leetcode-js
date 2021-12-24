function reverse(x) {
  if (x < 0) {
    x = Number(x.toString().replace("-", ""));
    x = Number(x.toString().split("").reverse().join(""));
    return check(x) ? 0 : -x;
  } else if (x > 0) {
    x = Number(x.toString().split("").reverse().join(""));
    return check(x) ? 0 : x;
  } else return 0;
  function check(n) {
    if (x > 2 ** 31 - 1 || x < -(2 ** 31)) {
      return true;
    } else return false;
  }
}

// console.log(reverse(-123));
// console.log(reverse(-2147483648));
// console.log(reverse(1534236469));
// console.log(reverse(15342));
