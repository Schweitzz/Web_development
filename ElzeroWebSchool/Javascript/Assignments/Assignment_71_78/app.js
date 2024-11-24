/****************task1************* */
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newMix = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });
console.log(newMix);
// Elzero
/***************************************/

/****************task2************ */ /**remove duplicate characters from a string */
let myString = "EElllzzzzzzzeroo";
let lastElement = "";
let newMyString = myString
  .split("")
  .filter(function (ele) {
    if (ele === lastElement) {
      lastElement = ele;
      return false;
    } else {
      lastElement = ele;
      return true;
    }
  })
  .reduce(function (acc, current) {
    return acc + current;
  });
console.log(newMyString);
// Elzero
//you can use the inverted logic by seeing if doesn't equal it and of course another solution would be easier with reduce only
/***************************************/

/****************task3************ */ /**arr.flat() */
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newMyArray = myArray.reduce(function (acc, current) {
  if (Array.isArray(current)) {
    current = current.reduce(function (acc, current) {
      return acc + current;
    });
  }
  return acc + current;
});
console.log(newMyArray);
// Elzero

/***************************************/

/****************task4************ */
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newNumsAndStrings = numsAndStrings
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map((ele) => -ele);
console.log(newNumsAndStrings);
// [-1, -10, 10, 20, -5, -3]

/***************************************/

/****************task5************ */
let nums = [2, 12, 11, 5, 10, 1, 99];
let newNums = nums.reduce(function (acc, current) {
  return current % 2 === 0 ? acc * current : acc + current;
}, 1);
console.log(newNums);
// 500
