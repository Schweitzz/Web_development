/***let's begin the loops assignment */
/**it's the early morning of day 1/8/2024 and i will be a big thing isa */

/*************1***************** */
let start = 10;
let end = 100;
let exclude = 40;

// Output
/*10;
20;
30;
50;
60;
70;
80;
90;
100;*/
/*for (let counter = start; counter <= end; counter += start) {
  if (counter === exclude) {
    continue;
  }
  console.log(counter);
}*/

/*************2***************** */
let start2 = 10;
let end2 = 0;
let stop = 3;

// Output
/*10;
09;
08;
07;
06;
05;
04;
03;*/
for (let counter = start2; counter >= end2; counter--) {
  if (counter === 3) {
    console.log(`${end2}${counter}`);
    break;
  }
  if (counter < start2) {
    console.log(`${end2}${counter}`);
    continue;
  }
  console.log(counter);
}
/*************3***************** */
let start3 = 1;
let end3 = 6;
let breaker = 2;

// Output
/*1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4*/
for (let counter = start3; counter <= end3; counter++) {
  console.log(counter);
  console.log(`--${breaker}`);
  console.log(`--${breaker * breaker}`);
}
/*************4***************** */
let index = 10;
let jump = 2;

for (;;) {
  if (index <= 2) {
    break;
  }
  console.log(index);
  index -= jump;
}

// Output
/*10;
8;
6;
4;*/

/*************5***************** */
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "A";

// Output
/*("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");*/
for (let counter = 0; counter < friends.length; counter++) {
  if (friends[counter][counter - counter] === letter) {
    continue;
  }
  console.log(friends[counter]);
}
/*************6***************** */
let start6 = 0;
let swappedName = "elZerO";
let Name = "";
// Output
("ELzERo");
for (let counter = start6; counter < swappedName.length; counter++) {
  if (swappedName[counter].charCodeAt(0) < 97) {
    Name += swappedName[counter].toLowerCase();
    /*console.log(Name[counter]);*/
  }
  if (swappedName[counter].charCodeAt(0) >= 97) {
    Name += swappedName[counter].toUpperCase();
    /*console.log(Name[counter]);*/
  }
}
console.log(Name);
swappedName = Name;
console.log(
  swappedName
); /**strings are immunable but you can change the value the variable is looking at */

/**here you learn the method charCodeAt
 * and that you can't change char of the strings with indexing and you can't put a method in the left hand assignment like this
 * very important it's not that you can't change with indexing the point is that strings are immutable so when
 * you try to access a part of string while the variable still looking at it you try to change the string itself 
 * what should you do like here is manipulate the string and put it in a new one 
 *   if (swappedName[counter].charCodeAt(0) < 97) {
    swappedName.charAt(counter)= swappedName[counter].toLowerCase();
    console.log(Name[counter]);
  }
  if (swappedName[counter].charCodeAt(0) >= 97) {
   swappedName.charAt(counter)= swappedName[counter].toUpperCase();
    console.log(Name[counter]);
 */
/**
 * you can also look at that
 * let swappedName = "elZerO";
let Name = ""; // Initialize an empty string to store the result

// Iterate over each character in the string
for (let char of swappedName) {
  // Check if the character is uppercase
  if (char === char.toUpperCase()) {
    // Convert uppercase to lowercase
    Name += char.toLowerCase();
  } else {
    // Convert lowercase to uppercase
    Name += char.toUpperCase();
  }
}

console.log(Name); // Output the final modified string
 */

/*************7***************** */
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
/*2;
3;
4;*/

for (let counter7 = start7; counter7 < mix.length; counter7++) {
  if (typeof mix[counter7] === "number" && mix[counter7] !== mix[start7]) {
    console.log(mix[counter7]);
  }
}

/**to loop while checking on all elements don't use while so you have to use for here */

/*************1 in the following assignment***************** */
let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index2 = 0;
let counter8 = 0;

// Output
/*("1 => Sayed");
("2 => Mahmoud");*/
while (counter8 < friends2.length) {
  if (friends2[counter8][index2] === "A") {
    counter8++;
    continue;
  }
  console.log(`${counter8} => ${friends2[counter8]}`);
  counter8++;
}
/**The issue with this code is in the continue statement inside the while loop. Let's break down the problem:

The continue statement is inside an if condition, but it's not incrementing the counter8 variable.
When the condition friends2[counter8][index2] === "A" is true (i.e., when a name starts with "A"), the continue statement is executed, skipping the rest of the loop body.
However, because counter8 isn't incremented in this case, the loop will get stuck on the same element indefinitely, creating an infinite loop.

Here's a corrected version of the code: */
