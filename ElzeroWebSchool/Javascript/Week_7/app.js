let arr = ["Ahmed", "Kareem", "Amr", "Sayed"];
for (let i = 0; i++; ) {
  console.log(arr[i]);
}
/**if you don't write the i++ the condition won't be met -> infinite loop  */
/**let i = 0; i++; no output as it doesn't know to execute the loop or not */
/**what he meant with we can delete them is that you would write them elsewhere */

let myFriends = [1, 2, "Osama", "Ahmed", "Sayed", "Ali"];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}
console.log(onlyNames);
/**in js we can compare types easily using typeof operator
 * notice that he used push so the right order appears
 */
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(` - ${colors[j]}`);
    if (colors[j] === "Green") {
      continue mainLoop; /**notice that with labels you can control specific blocks of the code */
    }
  }
}
let z = 0;
for (; z < 2; ) {
  /**what you delete from here leave its semicolon */
  console.log("Hello");
  z += 2;
}

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}
/**you literally can build an entire page with js  */
/**notice that you can spilt the container div tags */

/**loop challenge */
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let adminsNumber = 0;
for (let loopCounter = 0; loopCounter < myAdmins.length; loopCounter++) {
  if (myAdmins[loopCounter] === "Stop") {
    break;
  }
  adminsNumber++;
}
document.write(`<div>We Have ${adminsNumber} Admins</div>`);
document.write(`<hr>`);

for (let loopCounter = 0; loopCounter < adminsNumber; loopCounter++) {
  document.write(`<div>`);
  document.write(
    `the admin for the team ${loopCounter + 1} is ${myAdmins[loopCounter]}`
  );
  document.write(`<h3>Team members:</h3>`);
  for (
    let loopCounter2 = 0;
    loopCounter2 < myEmployees.length;
    loopCounter2++
  ) {
    if (myEmployees[loopCounter2][0] === myAdmins[loopCounter][0]) {
      document.write(`<p>-We Have ${myEmployees[loopCounter2]}</p>`);
    }
  }

  document.write(`</div>`);
  document.write(`<hr>`);
}

// There's a comment here, but it's cut off in the image
