/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/
/*"use strict"; note that i can remove the let key word from the destructuring expression and it still works 
unless you use the strict mode*/
/*let a = 1;
let b = 2;
let c = 3;
let d = 4;*/ /**so you can't declare the variables and use let with destructuring */

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama", h] = myFriends;
/**note that destructuring creates these variable and you either give them value or default value or it becomes undefined */
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(h);

console.log("#########");
// console.log(myFriends[4]);

[, y, , z] = myFriends;

console.log(y);
console.log(z);

/*
  Destructuring
  - Destructuring Array Advanced Examples
*/
/**you can reach multi dimensional arrays easier */
let myFriends2 = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [aa, , [, bb]]] = myFriends2;

console.log(aa); // Shady
console.log(bb); // Gamal

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);

/*
  Destructuring
  - Destructuring Object
*/
console.log("#############");
/*const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};*/

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);  /**this way if your variables are declared before*/

/**so in object you have to write variables and yes variables names that are exactly like the
 * properties names so it can search for it and assign it and it doesn't go by order like the array
 * but it searches
 */

/*const { theName, theAge, theCountry, theTime, theTitle } = user;
//const [theName, theAge, theCountry, theTime, theTitle] = user; //error
console.log(theName);
console.log(theAge);
console.log(theCountry);
console.log(theTime);
console.log(theTitle);*/

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 50,
  },
};

/**so when is nested object if you search for a property that is not present will give you error because you're trying to search
 * the undefined
 */
/**as we are trying to access nested object you write with object syntax */
const {
  theName: n,
  theAge: aaa,
  theCountry,
  theColor: co = "Red",
  skills: { html: hh, css },
} = user;

/**change the name of the variables than the names of the properties */
console.log(n);
console.log(aaa);
console.log(theCountry);
/**change the name and also give a default value */
console.log(co);
/**accessing nested objects */
console.log(`My HTML Skill Progress Is ${hh}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

/*
  Destructuring
  - Destructuring Function Parameters
*/

showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}

/*
  Destructuring
  - Destructuring Mixed Content
*/

const user7 = {
  theName: "Osama",
  theAge: 39,
  skills3: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName: nn,
  theAge: aaaa,
  skills3: [, , three],
  addresses: { egypt: ee },
} = user7;

console.log(`Your Name Is: ${nn}`);
console.log(`Your Age Is: ${aaaa}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${ee}`);
//console.log(`Your Live In: ${skills3}`);

/**Destructuring challenge */
/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends4 = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  let [
    {
      title: t,
      age: ag,
      available: av,
      skills: [skill1, skill2],
    },
    ,
  ] = myFriends4;
  console.log(t);
  console.log(ag);
  if (av === true) {
    console.log("is available");
  } else {
    console.log("is not available");
  }
  console.log(skill1);
  console.log(skill2);
} else if (chosen === 2) {
  let [
    ,
    {
      title: t,
      age: ag,
      available: av,
      skills: [skill1, skill2],
    },
  ] = myFriends4;
  console.log(t);
  console.log(ag);
  if (av === true) {
    console.log("is available");
  } else {
    console.log("is not available");
  }
  console.log(skill1);
  console.log(skill2);
} else if (chosen === 3) {
  let [
    ,
    ,
    {
      title: t,
      age: ag,
      available: av,
      skills: [skill1, skill2],
    },
  ] = myFriends4;
  console.log(t);
  console.log(ag);
  if (av === true) {
    console.log("is available");
  } else {
    console.log("is not available");
  }
  console.log(skill1);
  console.log(skill2);
} else {
}
