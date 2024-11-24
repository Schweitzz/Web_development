/************task_1********** */
// Create Your Object Here

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: () => {
    return `My Name Is ${member.name}, My Age is ${member.age}, I Live in ${member.country} `;
  },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
/******************************* */

/************task_2********** */
// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Elzero",
};
console.log(objMethodOne.property); // "Method One"
console.log(objMethodOne);

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
  property: "Elzero2",
});
console.log(objMethodTwo.property); // "Method Two"
console.log(objMethodTwo);
// Method Three
// Create Your Object Here
let objMethodThree = Object.create(objMethodTwo);
//you can of course change the value to what you want
console.log(objMethodThree.property); // "Method Three"
console.log(objMethodThree);
// Method Four
// Create Your Object Here
let objMethodFour = Object.assign(objMethodTwo);
console.log(objMethodFour.property); // "Method Four"
console.log(objMethodFour);
/******************************* */

/************task_3********** */

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);
/**********that's a good note you can put variables into an object as properties */
/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
/******************************* */

/************task_4********** */
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
/***you can use keys, entries or values methods  */
console.log(Object.keys(myFavGames).length);

let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}

// Ouput

/*"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"*/
