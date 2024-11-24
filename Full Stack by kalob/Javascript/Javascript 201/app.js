console.log("Hello World!");
/*window.onload= function(){
    alert("Hello");
}*/
window.onbeforeunload=function(event){/**probably not supported in my browser */ /**it worked but it needed a change to show the message in my case declaring a variable in the console */
    /**for each event handler there is an associated object called event that has some information about the trigger of the event handler */
    console.log("leaving");
    let message="sure you want to leave"; /**event this doesn't work */
   /* event.returnValue=message;*/      /**it can work without this and it shows specific message not the one you set */
    return message;
    /**Why Both Lines?This line ensures that the message is set correctly in modern browsers that follow the specification.
return message;: This line is included for compatibility with older browsers that use the function's return value for the confirmation message. */
}

/**examples of implicit casting */

console.log(null + 5); // 5
console.log(undefined + "Hello"); // "undefinedHello"

/*let obj = {
    valueOf: function() { return 10; },
    toString: function() { return "Object"; }
};
console.log(obj + 5); // 15 (Uses valueOf method)
console.log("" + obj); // "Object" (Uses toString method)*/ 

/*let arr = [1, 2, 3];
console.log("Array: " + arr); // "Array: 1,2,3"*/

/** */

let num=4;
if(num===4){
    console.log(num);
    var numm=77;
}
console.log(numm);     /**so var is global even if it's used locally and that's why let is better as it's more logical */

/** */
let aaa;         /**you can use the trick of declaration to bypass what i have written down there */
console.log(aaa);            /**as var takes a global scope here the output will be undefined then 7 */
 aaa=7;                     /**but when you try let you can't as it's not defined yet so var not just global it goes to the first line
  /**if already declared it just give it a value now *//*                              it's wild */
console.log(aaa);
/**the declaration then initializing in another part of the code is called variable hoisting */

/** */
let nameUser= "kareem";
function greeting(){
    console.log(nameUser);
    var person2=6;
}
greeting();
/*console.log(person2);*/

let nameUser2= "karrrreem";
if (1){
    console.log(nameUser2);
    var person3=6;
}
console.log(person3);
/**var is function scope but let is block scope and think good about it */
/** a closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. This means that a function defined inside another 
 * function has access to the outer function's variables, even after the outer function has finished executing. */
/**function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
}

const counter = createCounter();
counter.increment(); // Outputs: 1
counter.increment(); // Outputs: 2
counter.decrement(); // Outputs: 1 */

/** */
/**In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callback functions allow you to write asynchronous code, where certain
 *  tasks can be performed while waiting for other operations to complete, such as network requests, timers, or event handling. */
/**function greeting(name) {
    console.log('Hello, ' + name);
}

function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting); // 'greeting' is passed as a callback */

/** */

