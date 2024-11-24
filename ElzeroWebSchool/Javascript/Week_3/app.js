console.log(1_000_000);
console.log(1e-4);
console.log(1e4);
console.log(1e4);
console.log(Number.EPSILON);
console.log(Number.NEGATIVE_INFINITY + 1); //lol still
console.log(Number.NaN);

console.log("#################");

console.log((100.5).toString());
console.log((100.556233).toFixed(2)); /**returns a string */
console.log(true.toString()); //no problem with most data types

console.log(Number("100"));
console.log(+"100");
/**so both of those two ways are not the best way to turn string into a number use Number when type casting and you're sure
 * that the value is only a string but use parseInt to extract the number from the string
 */
console.log(Number("100 osama"));
console.log(+"100 osama");
console.log(parseInt("100 osama"));
console.log(parseInt("osama 100 osama"));

console.log("##################");
/**so functions that are  */
console.log(Number.isNaN("Hello")); /**don't use strings with is isNaN */
console.log(isNaN("Hello")); /**see the difference*/
console.log(isNaN(10));
console.log(isNaN(NaN));
// console.log(String.isNaN(10)); //need to be from its class
console.log(Number.parseInt("100 osama"));
console.log(Number.toString(110.58)); /**not working  */
console.log(String.toString(110.58)); /**not working  */
//the isNaN method return true only if the evaluation of the brackets is NaN
/**notice what methods should have the object Number before it  */
/*so Number is an object but there is a function with the same name  */
/**
When you declare a variable in JavaScript, it doesn't become an instance of an object of the whole page unless you use var
/**so there is static methods these are for any thing like parseInt and you can type the name of the class before it
 * and there is instance methods these needs to be applied on instances that of a type defined in the prototype of the object
 * or to variable 
 * parseInt is a function in the language and toString is a method in all classes
 */

/**there are 3 ways to get a number from string + operator or Number fn or Number.parseInt
 * Number fn can't be applied for string that has words in it
 */
console.log(Math.trunc(11.6)); /**trunc cuts the floating part  */
// you can't chain the Math methods also you can't use it without the class name
/**Number challenge */
let a = 1_00,
  b = 2_00.5,
  c = 1e2,
  d = 2.4;
/**smallest of them as integer */
console.log(Math.trunc(Math.min(a, b, c, d)));

/*** use a and d one time to get 10000*/
console.log(Math.pow(a, Math.trunc(d)));

/**get value 2 from d with 4 ways  */
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Number.parseInt(d));

/**get these values */
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2));
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d)));

/**********************************strings **************************************************/
let userName = " Kareem";
console.log(userName.length);
/**notice the difference when the index is bigger than the array */
console.log(userName[7]);
console.log(userName.charAt(7));
/**notice as these methods will be applied to strings only they are instance methods */
console.log(userName.trim().charAt(2).toUpperCase());
console.log(userName.trim().toUpperCase());

let str = "Elzero Web School";
/**in these searching methods you can give a whole word as a value */
/**lastIndexOf works from end but still gives you the index in a correct way  */
console.log(str.lastIndexOf("o"));
/**given the start as 4 it will include the element with index four but the end is not included */
console.log(str.slice(4));
console.log(str.slice(-5, -3)); /**you can use slice with negative indexing */
/**notice all the cases of split */
console.log(str.split()); //gives the whole string as an array of one element
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split(" ", 2));

/**it appears that he didn't print the second \n */
console.log((str + "\n").repeat(2));
console.log(str);

/**in terms of the methods that return strings there are slice subString and substr(notice no camelCase here in these two)
 * slice accepts negatives
 * subString doesn't allow negative and considers it to be zero so what you do is use.length-index
 * substr accepts the number of char not the index /substr also accepts negative indexing
 */
/**if the start is bigger than the end it swaps them  */
console.log(str.substring(6, 2));
console.log(str.substr(-3, 2)); /**notice this method is legacy */

console.log(str.includes("Web", 3));
console.log(str.startsWith("Web", 7));
/**endWith includes the length the eh length that you provide then see if it end with this or not */
console.log(str.endsWith("Web", 3));
console.log(str.endsWith("Web", 10));

/**strings challenge */
/**i will take str variable from above    "Elzero Web School"    */
console.log(str.charAt(2).toUpperCase() + str.slice(3, 6)); //Zero
console.log(str.charAt(13).toUpperCase().repeat(8)); //charAt doesn't allow negative indexing
console.log(str.split(" ", 1));
console.log(`${str.substr(0, 6)} ${str.substr(11, 6)}`);
console.log(`${str.split(" ")[0]} ${str.split(" ")[2]}`);
console.log(
  str.slice(0, 1).toLowerCase() +
    str.slice(1, str.length - 1).toUpperCase() +
    str.slice(str.length - 1).toLowerCase()
); /**this is solution is dynamic as wanted 
Hint: try any other string */
/**a very big deal breaker here is some times the error is not correct like he told me that there is no
 * fn called toLowerCase and even tho it appears in VScode as abc not a fn but it works so
 * the problem was that i used split instead of slice before one of them so it doesn't work
 * and this is the problem i faced ahead that the function has to  apply for the datatype or he doesn't recognize it
 */

/**number methods:
 * toString toFixed parseInt parseFloat isNaN and some other properties
 * for Math trunc ceil floor round min max pow and notice that you can migrate some of the number methods with it
 * string methods [] not a method but to get a char , charAt , toUpperCase , toLowerCase length trim
 * indexOf , lastIndexOf , slice , split , repeat
 * substring ,substr , startWith, endWith , Includes
 */
