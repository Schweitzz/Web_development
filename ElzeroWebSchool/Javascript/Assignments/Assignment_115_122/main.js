/********assignment 1 ******* */
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a, , , , e] = myNumbers;
console.log(a * e); // 5

/*************************** */
/********assignment 2 ******* */

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
let [a2, b, c, [d, e2, [f, g]]] = mySkills;
console.log(`My Skills: ${a2}, ${b}, ${c}, ${d}, ${e2}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

/*************************** */
/********assignment 3 ******* */

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

//let arrTotal = arr1 + arr2; //returns a string
//console.log(typeof arrTotal);
//console.log(arrTotal);

/**you can also use concat method */
let combinedArray = [...arr1, ...arr2, ...arr3];

let [c3, , , , , , , a3, b3] = combinedArray;
// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);

// My Best Friends: Shady, Mahmoud, Ahmed

/*************************** */
/********assignment 4 ******* */

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let {
  age: a4,
  working: w,
  country: c4,
  hobbies: [h1, , h3],
} = member;
console.log(`My Age Is ${a4} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c4}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

/*************************** */
/********assignment 5 ******* */

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};
/**note that strings can't be variables names so you have to set an alias */
let { title: t, developer: d5 } = game;
let {
  "Oath In Felghana": [u, j],
  "Ark Of Napishtim": { US: u_price, JAP: j_price },
  Origin: or,
} = game.releases;

const keys = Object.getOwnPropertyNames(game.releases);
let [o, a5] = keys; //returns an array
// Write Your Destructuring Assignment/s Here

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d5} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a5}`);
// Although I Love Ark Of Napishtim

console.log(`${a5} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a5} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

/*************************** */
/********assignment 6 ******* */
/**done in the challenge */
