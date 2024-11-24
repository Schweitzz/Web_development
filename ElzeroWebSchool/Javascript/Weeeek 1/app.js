/**every thing that can be done in the language can be directly tested in the console meaning
 * that the console has its own interpreter
 */
// %c this is called a directive
/**console is not part of the language as it's an api deals with js to output stuff on the console of a browser */
console.log(
  "kareem is %c great",
  "color : blue;"
); /** watch the syntax and obviously any styling will be with css */
/****assi 1  */
/**code 1 won't work code 2 will as well as three */
/************ */

/********assi 2  */

let newDiv =
  document.createElement("h1"); /**in this you write the type of the element */
newDiv.textContent = "Elzero byt3ol2";
newDiv.style.backgroundColor = "blue";
newDiv.style.color = "Black";
document.body.appendChild(newDiv); /**this is the code the show the element */
/************ */

/********assi 3  */
console.log(
  "%c Elzero %c Web %c School",
  "color:red ; font-size:40px;",
  "color:green; font-weight: bold; font-size:40px;",
  "color:blue; font-size :40px;"
);
/**if you provide more than one specifier you have to provide 
the attributes otherwise the code gets applied to all */ /**notice the syntax */

/************ */

/********assi 4  */
console.group("group 1");
console.log("element 1 ");
console.log("element 2 ");
console.group("child");
console.log("this is child");
console.groupEnd();
console.groupEnd();
console.group("group 2");
console.log("element 1 ");
console.log("element 2 ");
console.groupEnd();

/************ */

/********assi 5  */

console.table([
  "kareem",
  "ahmed",
  "basel",
]); /**you can show more columns by storing the data in an object and give it
 to the fn also you can specify which attributes to show */

/************ */

/********assi 6  */
/**you either comment them or use an if condition with a false condition
 * or you  can make the script run before the element creation
 */
