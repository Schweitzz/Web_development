console.log("Hello World!");
let arr = ["kareem", "Amr", "Ahmed", ["Osama", "Mohamed"]]; //this is a 3d array

console.log(arr[3]); /**see the difference between these three */
console.log("Hello", arr[3]); //doesn't change to a string
console.log(`Hello ${arr[3]}`);
let a = 5;
console.log(`Hello ${a}`);

let str = "karee,";
console.log(Array.isArray(arr));
console.log(Array.isArray(str)); //string is not array

console.log(arr.length);
arr[arr.length] = "osman"; //you can make the array bigger by pushing elements in it even beyond its size
console.log(arr.length);
console.log(arr);
arr[arr.length + 3] = "rana";
console.log(arr); /**you can have empty elements */
console.log(arr[arr.length]); /**trying to access beyond array size gives undefined */
console.log(arr[arr.length - 2]); /**also undefined if you try to access the empty element */

console.log("this is an eye break");

let arr2 = ["kareem", "Amr", "Ahmed"];

/**adding methods return the new length removing ones return the removed element */
let c = arr2.unshift("Nada");
console.log(arr2);
console.log(c); //number of elements

let FirstElement = arr2.shift("Nada"); //this method returns the removed element
console.log(arr2);
console.log(FirstElement);

c = arr2.push("Mokhtar");
console.log(arr2);
console.log(c);

c = arr2.pop("Mokhtar");
console.log(arr2);
console.log(c);

arr2.unshift("Nada", "kareem", "Amr", "Ahmed"); /**works for multiple parameters */
console.log(arr2);

let arr3 = [];
console.log(arr3);
let r = arr3.unshift(); //if you don't pass won't do anything unlike the removing ones
console.log(r);
console.log(arr3);
r = arr3.pop(); //still wouldn't do anything but look at the return
console.log(r);
console.log(arr3);

/** -1 if not found and it only find the first element */
console.log("this is an eye break");

let arr4 = ["Ahmed", "Mahmoud", "Kareem", "Rana", "Ahmed"];
let str2 = "Ahmed";

console.log(arr4.indexOf("Ahmed"));
console.log(arr4.indexOf("Ahmed", 0));
console.log(arr4.indexOf("Ahmed", -1));
console.log(arr4.indexOf("ahmed")); //try lower case try finding a letter does it include or not
console.log(arr4.indexOf("A"));
console.log(arr4.includes("Kareem", 1));
console.log(str2.indexOf("h"));
console.log(str2.lastIndexOf("Mokh"));

console.log("this is an eye break");

/**it care about the first number whether it's string or number */
arr5 = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10, 91];
let z = arr5.sort();
console.log(arr5);
console.log(z); //returns the new array
z = arr5.reverse();
console.log(arr5);
console.log(z);
/**these methods doesn't return and look at the way they are both working+ sort can be changed by a function parameter*/

console.log("this is an eye break");
let arr6 = ["Ahmed", "Mahmoud", "Kareem", "Rana", "Ahmed"];
console.log(arr6.slice(1, 3));
console.log(arr6); /**this method doesn't change the original array */
console.log(arr6.slice()); //no effect
console.log(arr6.slice("")); //no effect

console.log(arr6.splice(0, 0, "Fahmoud")); /**note what does it return */
console.log(arr6); /**this method changes in the original array and return a new array*/

/*
Arrays Methods [Joining]
- concat(array, array) => Return A New Array
- join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2]
); /**you can add stuff with concatnation */

console.log(allFriends);

console.log(allFriends.join()); /**seperate it with commas like the template literal */
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

/*
Arrays Challenges
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
/**notice that reverse makes permanent damage that why we don't need it in the 2nd */
// Write Code Here
/*console.log(my.reverse()); /**(6) ['Ameer', 'Gamal', 'Osama', 'Elham', 'Mazero', 'Ahmed'] */

/*console.log(my.reverse().slice(my.length / counter)); */ // ["Osama", "Elham", "Mazero", "Ahmed"]

/*console.log(my.slice(counter, counter + my.length / counter));*/ // ["Elham", "Mazero"]

/*let first = my[my.length / counter].slice(zero, my.length / counter);

let second = my[counter - my.length / counter].slice(my.length / counter);

console.log(`${first}${second}`); // "Elzero"*/

console.log(
  my[counter - my.length / counter].slice(
    (my.length / counter) * (my.length / counter),
    counter + my.length / counter
  ) + my[counter].slice(zero, counter - my.length / counter)
); // "rO"*/

/**Array methods
 * all the method change in the array they don't create a new one
 * isArray
 * unshift push shift pop
 * sort reverse
 * indexOf lastIndexOF includes
 * slice splice(creates a new array and also change in the og)
 * join concat
 */
