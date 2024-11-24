/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/
window.console.log("Hello world");
window.document.title = "Hello JS";

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message(placeholder)) => Collect Data
*/
/***so the three of them are not used and there are libraries for better versions of them or use the html and css */
/**prompt return the input value , confirm return boolean depending on the pressed button  */
// there is no difference in using window.alert and alert

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

/*
let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

console.log(promptMsg);*/

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }
/**so as the setTimeout is a builtin function you have to follow how is it written by passing the arguments of the callback fn
 * as argument to the setTimeout fn
 */

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

/**so clearTimeout need the handler of the setTimeout so you have to assign it to a variable */

/***so if you look at this block variables in javascript declared with let or const are hoisted so the javascript knows they are
 * declared but not yet initialized if you try to reference it it will give you error but since the clearTimeout here is on an event it
 * doesn't reference it directly so the code work fine if used var also will be hoisted but will also be initialized by undefined
 */
let btn = document.querySelector("button");

btn.onclick = function () /*osama*/ {
  clearTimeout(counter);
};
/*osama();*/
function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counter = setTimeout(sayMsg, 3000, "Osama", 38);

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/
/**they are the same to the ones with the timeout in the structure */

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter2);
  }
}

let counter2 = setInterval(countdown, 1000);

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hostname
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/
/**hostname does not include the port number.
host includes the port number if it is specified in the URL.
they return the ip address if the website doesn't have a domain but is online so to show something like 
this you have to activate live server extension */
/**hash used when you insert a hash in the url that refer to a specif place in the page */
console.log(location);
console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host); /**you may only need to change only the hostname of the url */
// console.log(location.hostname);

// console.log(location.protocol); /**in local it will be file otherwise the http or https */

// console.log(location.hash);

location.href = "file:///D:/Self%20learning/Web%20development/ElzeroWebSchool/Javascript/Week_14%20BOM/index.html#sec2";
console.log(location.hash); /**hash have to be assigned in the url first */
/***notice to add the hash don't add a slash just a #section name */

/**don't forget this function is from the location object reload() */
/**replace doesn't hold the current page in the history unlike if you set the location.href or the assign method */

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Window Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/
/**the top left features specify the position of the new window */
/**if you need to open a about:blank page in the same page you have to  use this code */
/**notice that you can't do both because it opens a new complete page that your script is not connected to it */
/*setTimeout(function () {
  let myWindow = window.open("about:blank", "_self");
}, 6000);

/**close method will only close pages opened by a js script  */
/**used url in the open method can be even photos or anything */
/*setTimeout(function () {
  myWindow.open("", "_blank", "", false);
}, 8000);

/**you have to enable the pop out settings */
/*setTimeout(function () {
  window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
}, 2000);*/

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/
/**scroll method is not supported by safari , print make a print page not like to show something on the screen
 * to hold the window you can store it in a variable
 */
/**as the browser load elements from top to bottom stop can stop this process */

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");  /**try stop and close  */

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

let btn2 = document.querySelector("#button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    console.log(window.scrollY);
    btn2.style.display = "block";
  } else {
    btn2.style.display = "none";
  }
};

btn2.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/**BOM methods:
 * alert confirm prompt
 * setTimeout clearTimeout
 * setTimeInterval clearTimeInterval
 * location Object href Get / Set [URL || Hash || File || Mail] ,host hostname hash protocol reload() replace() assign()
 *  open(URL [Opt], Window Name Or Target Attr [Opt], Window Features [Opt], History Replace [Opt])
  - close() Window Features left [Num] top [Num] width [Num] height [Num] menubar [yes || no]
 *History API
  --- Properties length
  --- Methods back() forward() go(Delta) => Position In History
 stop() print() focus() scrollTo(x, y || Options) scroll(x, y || Options) scrollBy(x, y || Options)
 
 */
