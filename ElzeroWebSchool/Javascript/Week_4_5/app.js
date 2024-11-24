console.log(Number === Number);
console.log(Number !== String); /**these are objects so the operator can be operate on it  */
console.log(typeof Number);
console.log(typeof "kareem" === typeof "ahmed");

/**ternary operator can have else if statements */
let aa = 5;
aa > 5
  ? console.log(" aa>5")
  : aa === 0
  ? console.log("aa===0")
  : aa <= 5
  ? console.log("aa<=5")
  : console.log("none"); /**you 
 have to provide an else condition here  */

let b = 1; /**try 0 "" undefined null */
console.log(`the price is ${b || 200}`); /**you can setup a default value in case the variable value is falsy  */
console.log(`the price is ${b ?? 200}`);

/**if challenge  */
let a = 10;

/*if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");               //10 to 40
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}*/
/**using the ternary method */
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

let st = "Elzero Web School";

if (typeof st === typeof "34") {
  console.log("Good");
}

if (st.includes("W")) {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof st === typeof "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

/******************* */

let z = 1;

switch (z /**the same logic of break works here too */) {
  case 0:
    console.log("day 0");
    break;
  case 1:
    console.log("day 1");
    break;
  case 2:
  case 3:
    console.log("day 2");
    break;
  default:
    console.log("day");
    break;
}
/**switch uses the identical operator
 * default needs break if it's in the beginning of the code
 * you can have multiple cases that result in the same output
 */

/**switch challenge */
let job = "Manager"; //8000
let salary = 0;

/*if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
console.log(salary);*/
/**turns it into switch */
switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Designer":
  case "Developer":
    salary = 7000;
    break;
  default:
    salary = 4000;
    break;
}
//8000
console.log(salary);
