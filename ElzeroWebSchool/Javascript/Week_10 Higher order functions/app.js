console.log("Hello higher order functions");
/*map as a function that loops on the array and execute a function in it the function takes the elements index and arr as parameters 
but only elements is mandatory
map return a new array so if you want to make some action with the array without changing the original use map
*/
let myNums = [1, 2, 3, 4, 5];

let newArr = myNums.map((index, e, arr) => {
  /**map is a method from the array object */ return index + index;
}, 10); /**notice how this array is created without brackets */
/**as the function is a parameter you don't have to provide a name */
/**it has a default to consider the parameters in this order */
console.log(newArr);
console.log(Array.isArray(newArr));
/** i think array is object to provide the methods and to make it dynamic idk */

/**map function perform the function in each iteration */
function double(element) {
  return element * 2;
}
let newArr2 = myNums.map(double);
console.log(newArr2);

let str = "elZeRO";
let swappedStr = str
  .split("")
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");
console.log(swappedStr);

let str3 = "elZ44e45RO";
let ignoreNumbers = str3
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : ""; //if you don't use the return you get empty array
  })
  .join("");
console.log(ignoreNumbers);
/**the negation one is ez */

let friends = ["Amgad", "Amr", "Ahmed", "Samir", "Rania", "Sama"];

let newFriends = friends.filter(function (ele) {
  console.log(ele.startsWith("A"));
  if (ele.startsWith("A")) {
    return true;
  }
  //return true;
  //return false; //[]
  /**each time you return true it takes this element and put it in the new array */
});

console.log(newFriends);

//console.log(friends.split("")); //gives not friends.split is not a function

let str4 = "elZ44e45RO";
let ignoreNumberss = str4
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele)) ? (ele = "c") : ""; //even if you change in the condition result > ele="c"
    /**filter doesn't work without return  */
    /**this case is strange because it is still gets the true however it's not assigned to the return */
  })
  .join("");
console.log(ignoreNumberss);

function test(letter) {
  return isNaN(letter) ? (letter = "b") : (letter = "c");
}
console.log(test("A"));

let mix = "As65krt";
let result = 1;
let multiplied = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele)) ? ele : "";
  })
  .map(function (ele) {
    result *= ele;
    return result;
  })
  .join("");
console.log(multiplied);

let arr17 = ["E", "@", "L", "@", "Z", "@", "@", "E", "R", "O", "Z"];
let str17 = arr17.reduce(function (acc, current, index, arr) {
  return current === "@" ? acc + "" : acc + current;
});
console.log(str17);

let literal1 = `this ${str17}`;
let literal2 = `too ${str17}`;
console.log(
  literal1 + literal2
); /**you can concatenate template literals like normal strings */

let arr18 = [1, 2, 3, 4];
arr18 = arr18.map(function (ele, index) {
  ele *= 2;
  return (ele *= 2); //note as ele is passed as value it doesn't change in the original array
  /**but you can still assign the map to the same variable to change it  */
});
console.log(arr18);
console.log(arr18);

let arr19 = [1, 2, 3, 4];
let newArr19 = arr19.forEach(function (ele, index) {
  arr19[index] *= 2;
  //as forEach doesn't return anything you can't assign the fn to the same array here
  /**assign to a different array and you changed it but map make more sense here */
});

console.log(arr19);

/*Higher Order Functions Challenges

- You Can Use:
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

- You Cannot Use:
  - Numbers
  - Letters

- You Must Use [Filter -> Map -> Reduce -> Your Knowledge]
- Order Is Not Important
- All In One Chain*/

let myString = "1,2,3,F,E,E,l,z,e,r,o,_W,e,b,_S,c,h,o,o,l,2,8,6"; //note that the commas are also elements because this is string

let solution = myString
  .split("")
  .filter(function (ele, index) {
    if (ele === ",") {
      return false;
    } else if (!isNaN(parseInt(ele))) {
      return false;
    } else {
      return true;
    }
  })
  .map(function (ele, index) {
    return ele === "_" ? (ele = " ") : ele;
  })
  .reduce(function (acc, current) {
    return acc + current;
  })
  .slice(true + !Array.isArray(myString));
console.log(solution); // Elzero Web School
/**so the key here is the order you first filter and then change what you want then reduce
 * so like don't use map before filter has it will be hard to change the only things you want
 * filter the elements then make the change
 */
