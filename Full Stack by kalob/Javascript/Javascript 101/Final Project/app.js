console.log("Hello World!");
// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const name = document.getElementById("name"); // Fill this in 
const age = document.getElementById("age"); // Fill this in.
const dogYears = document.getElementById("dogyears"); // Fill this in. 

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here
name.innerText="Kareem";         /*i would replace the span*/ /**i would use the user input */
const ageValue=age.innerText="23";      /**you can still assign value to a variable with changing this variable */

/**look at this problem he introduced a variable age without assigning a value to it only changing the innerText  */
console.log(Number(age));/**also you can't cast a node into a number */
function showDogYears(age) {
  // Step 3. Cast `age` as a number
  dogYears.innerText = Number(age) * 7;  
  return age * 7
  
}

// Step 4. Set the parameter of showDogyears()
dogYears.innerText = showDogYears(age.innerText);

// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about. 
const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
  node.classList.replace("fake-input","real-input");           /**instead of just adding you can replace */
})