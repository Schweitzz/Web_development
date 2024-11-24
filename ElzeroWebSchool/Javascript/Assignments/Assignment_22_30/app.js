console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(+"100000"); // 100000
console.log(Number("100000")); // 100000
console.log(Number.parseInt("100000")); // 100000
console.log(Number.parseFloat("100000")); // 100000
console.log((100_000).toString()); // 100000
console.log((100_000).toFixed()); // 100000
console.log(100 * 1000); // 100000
console.log(100 ** 2 * 10); // 100000
console.log(Math.ceil(100000)); // 100000
console.log(Math.trunc(100000)); // 100000
/**if you don't want to consider the two output string methods you can still use operators or Math methods */

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER - Number("9007199254740975")); //16

let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(Number.parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;

console.log(Number.isInteger(10) + Number.isInteger(10)); // 2)

let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10

console.log(Math.random()); //random function doesn't accept arguments and will ignore it
console.log(Math.round(Math.random(0, 4) * 4)); // 0 || 1 || 2 || 3 || 4

/**string assignments */
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.slice(-userName.length, 1).toLowerCase()); // e
console.log(userName.substr(-userName.length, 1).toLowerCase().repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
