let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

/*Method 1*/
console.log(myFriends.slice(num - num, num)); // [Ahmed, Elham, Osama];

/*Method 2*/
myFriends.pop();
console.log(myFriends); //[Ahmed, Elham, Osama];

/****************2 */
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

/****************3 */
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

/*****************************4******************************** */

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][website.length - website.length].slice(website.length).toUpperCase()); // ZERO

/*****************************5******************************** */
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.indexOf(needle) !== -1) {
  console.log("found");
}

if (haystack.lastIndexOf(needle) !== -1) {
  console.log("found");
}

if (haystack.includes(needle) == 1) {
  console.log("found");
}

// Write 3 Solutions

/*****************************6******************************** */
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr1, arr2).sort().join("").slice(arr2.length).toLowerCase()); // fxy
