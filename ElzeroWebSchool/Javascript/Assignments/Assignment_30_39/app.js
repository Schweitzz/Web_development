console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(+-50 < +"-40"); // true
console.log(-10 < -"-40"); // true
console.log(+"10" === 10); // true
console.log(+20 != false); // true

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(num2 > num1); // true
console.log(num2 >= num1); // true

let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a == b); // true
console.log(a < b && a >= c); // true
console.log(!(a > b) && !(a > b) && !(a == c) && !(a == c)); // true

let num11 = 9;
let str = "9";
let str2 = "20";

// Output
if (num11 == str) {
  console.log(`{num11} Is The Same Value As {str}`);
  if (num11 !== str) {
    console.log(`{num11} Is The Same Value As {str} But Not The Same Type`);
  }
}

("{num11} Is The Same Value As {str}");
("{num11} Is The Same Value As {str} But Not The Same Type");
("{num11} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value"); //fakes alba2y

/**honestly most of them is just a waste of time */
