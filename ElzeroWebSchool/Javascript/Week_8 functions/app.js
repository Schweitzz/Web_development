/**important note that here you don't provide a fn declaration just the definition also the variables you don't say let you
 * just type the variable name also notice you begin the fn with the keyword "function" as you don't have that return datatype
 * form in c
 */

let num1 = 5;
function sum(num1, num2) {
  num1 +=
    num1; /**here if you use the same name it will use the nearest in the scope so here global num1 doesn't get increased*/
}
sum(num1);
console.log(num1);

let num3 = 5;
function sum2(num4 = 2) {
  /**you can use default parameters */
  /*num4 = num4 || 2;*/
  num3 += num4;
}

sum2();
console.log(num3);

console.log("empty return statment =>");
function sayHello() {
  return; //undefined
}
console.log(
  sayHello()
); /**as return doesn't have anything in it it's undefined */
/**also if you don't provide a return and try to assign the function value to a variable it will be undefined */
/**as simple as it is but you can return a string :) */

function calc(...numbers) {
  let sum = 0;
  console.log(Array.isArray(numbers));
  console.log(typeof numbers);
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return `result is ${sum}`; /**you can return a template literal */
}

console.log(calc(30, 50, 30, 40));

function calc2(num1, ...numbers) {
  /**you can use parameters with the rest , it won't allow you to put rest in elsewhere than end */
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return `result is ${sum + num1}`; /**you can return a template literal */
}

console.log(calc2(30, 50, 30, 40));
document.write(`<p>this is a paragraph</p> <div>this is a div</div>`); //you can
let arrr5 = [];
console.log(arrr5); //this returns [] if you have elements it will show the whole array
document.write(`this is the array ${arrr5}`); //also here write the whole array but without the brackets try with elements
console.log(arrr5[0]); //this is undefined

/*Function - Random Argument Challenge
------------------------------------

Create Function showDetails
Function Accept 3 Parameters [a, b, c]
Data Types For Info Is
- String => Name
- Number => Age
- Boolean => Status
Argument Is Random
Data Is Not Sorted Output Depend On Data Types
- Use Ternary Conditional Operator*/

function showDetails(...userDetails) {
  let userName = "";
  let userAge = "";
  let userState = "";
  let userStateOutput = "";
  typeof userDetails[0] === "string"
    ? (userName = userDetails[0])
    : typeof userDetails[0] === "number"
    ? (userAge = userDetails[0])
    : (userState = userDetails[0]);

  typeof userDetails[1] === "string"
    ? (userName = userDetails[1])
    : typeof userDetails[1] === "number"
    ? (userAge = userDetails[1])
    : (userState = userDetails[1]);

  typeof userDetails[2] === "string"
    ? (userName = userDetails[2])
    : typeof userDetails[2] === "number"
    ? (userAge = userDetails[2])
    : (userState = userDetails[2]);
  userState === true
    ? (userStateOutput = "You Are Available For Hire")
    : (userStateOutput = "You Are Not Available For Hire");
  console.log(`Hello ${userName}, Your Age Is ${userAge}, ${userStateOutput}`);
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

let myFunction1 = (_) => console.log("myFunction1");
myFunction1();
let myFunction2 = (_) => {
  console.log("myFunction2");
};
myFunction2();
let myFunction3 = (_) => {
  return "myFunction3";
};
console.log(myFunction3());

var x = 10; /**with var you can redeclare a variable it's totally ok and the variable scope is fn scope but will still the same variable
and will get updated*/
if (true) {
  var x = 50;
}
console.log(
  x
); /**as the fn search in it first so it will use the local test not like use the global because the local didn't come yet*/

let test = 9;
if (true) {
  console.log(test);
  //let test = 8;
}
// so here will give you error because the variable wasn't initialized yet */
/**gives undefined when the variable is not present anywhere or if it passed but has no value
 * but it's position is wrong will give you not initialized yet
 */

var yz = 11;
function sayy() {
  var yz = 12; /*as var is function scope the yz inside the function won't affect the outter one if you redeclare because now
  it's not redeclare it's a different variable*/
}
sayy();
console.log(yz);

/**arrow fn challenge */

let names = function (...names) {
  return `String[${names.join("], [")}] => Done!`;
};

console.log(names("Osama", "Kareem", "Amr", "hamada"));

console.log(names2("Osama", "Kareem", "Amr", "hamada"));
function names2(...names) {
  return `String[${names.join("], [")}] => Done`;
}

let names3 = (...names) => `String[${names.join("], [")}] => Done`;
console.log(
  names3("Osama", "Kareem", "Amr", "hamada")
); /***arrow functions as defined as function expression cannot be hoisted */

let myNumbers = [20, 50, 10, 60];

let calc8 = (one, two, ...nums) => one + two + nums[true - true];
console.log(myNumbers[true + (myNumbers.length - myNumbers.length)]); /**
In JavaScript, true and false do have numeric equivalents (true is 1 and false is 0) when used in arithmetic operations, but when you use true as a property key in an object or an array
, it doesn't automatically get converted to 1. Here's why: */
console.log(
  calc8(
    10,
    myNumbers[true - true],
    myNumbers[true + (myNumbers.length - myNumbers.length)]
  )
); // 80
/*console.log(myNumbers[Array.isArray(myNumbers) + Array.isArray(myNumbers)]);*/

let calc9 = function (one, two, ...nums) {
  return one * two - nums[myNumbers.length - myNumbers.length];
};

console.log(
  calc9(
    10,
    myNumbers[Array.isArray(myNumbers) + Array.isArray(myNumbers)],
    myNumbers[myNumbers.length - myNumbers.length]
  )
);
