/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/
/**so simulating the events meaning that you can force the action of the event to happen when an event of your
 * preference happen for example to focus on an input field when the page load
 */
let one = document.querySelector(".one");
let two = document.querySelector(".two");

/*window.onload = function () {
  two.focus();
};*/

/*one.onblur = function () {
  document.links[0].click();
};*/
one.oninput = () => {
  if (one.value.length > 0) {
    one.blur();
    two.focus();
  }
};
two.oninput = () => {
  if (two.value.length > 0) {
    let theForm = document.querySelector("#v94");
    theForm.onsubmit = () => {
      one.blur();
      two.blur();
    };
  }
};

/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("show");
};

/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/
/***there is three ways to change in the css of and element either with direct accessing element.style.color=
 * or by writing a css script: element.style.cssText="WRITE CSS IN HERE"
 * or by the properties
 * and you can change the rules in the cssStyleSheet file but only with the properties
 */
/**try with and without the important ,notice that it is inline css */

/**any added css with js will be inline in the html element unless you change the  */
let myElement96 = document.querySelector("#v96");
console.log(element); /**notice no inline style appear */
console.log(myElement96);
myElement96.style.color = "green"; /**notice the logged element is the updated as always */

myElement96.style.fontWeight = "bold";

myElement96.style.cssText = "font-weight: bold; color: blue; opacity: 0.9";

myElement96.style.removeProperty("color"); /**also the remove is from the inline */

/**so it overwrite the external file even without the flag */
myElement96.style.setProperty("font-size", "40px", "important");
//myElement96.style.fontSize = "30px"; /**also this overwrite it so what is the point */
//myElement96.style.setProperty("font-size", "20px"); /**this without the important overwrites it  */

/**there is something wrong with those three idk why */
//document.styleSheets[0].cssRules[0]; //this is supposed to be the right but it doesn't work
/*document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");*/

/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element97 = document.getElementById("v97");
let createdP = document.createElement("p");
createdP.innerHTML = "this is p";
let text = "this is text after the div";

element97.after(text);
element97.before("this is text before the element");
element97.prepend(createdP);
// element.remove();

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/
/**the same idea with the nodes */
let span = document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.remove();
};

/*
  DOM [Cloning]
  - cloneNode(Deep)
*/
/***true clone the element with its innerHTML false takes only the attributes */
let myP = document.querySelector("#v99p").cloneNode(true); /*** */
let myDiv = document.querySelector("#v99d");

/**when you clone the element you will need to change the attribute */
myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP100 = document.querySelector("#v100");

// myP.onclick = one;
// myP.onclick = two; /**it will overwrite on the first one */

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama"; /**this way doesn't give an error  */

/**so the addEventListener can add multiple events to the same object or variable */
// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

myP100.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};
/**so the problem with the following block code that you can't set an event to an element that is not created yet moreover it's
 * to be created on event
 */

// let cloned = document.querySelector(".clone");
// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

/**dude Elzero failed me it worked with the onclick */
/**so this is a good idea to solve the problem with cloned not yet created by setting the event to the document and check with the
 * className but a better logic is to put all of them in a div and apply the general onclick to
 * that div but he also got it with the class name
 */
/*document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});*/
document.onclick = (e) => {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
};

/**all the methods:
 * getElementById,getElementByClassName, getElementByTagName, querySelector, querySelectorAll (find element) and they all start with the document object
 * getAttribute, setAttribute (change in attributes)
 * Element.attributes, Element.hasAttribute, Element.hasAttributes, Element.removeAttribute (check attributes)
 * createElement createAttribute createTextNode createComment setAttribute setAttributeNode appendChild (create anything)
 * onclick oncontextmenu onmouseenter onmouseleave onload onscroll onresize onfocus onblur onsubmit
 * click focus blur
 * style cssText removeProperty(propertyName) [Inline, Stylesheet] setProperty(propertyName, value, priority)(they all come after style property)
 * before [Element || String] after [Element || String] append [Element || String] prepend [Element || String] remove
 * nextSibling previousSibling nextElementSibling previousElementSibling parentElement
 * cloneNode(Deep)
 * addEventListener removeEventListener
 *
 * the properties you can use:
 * innerHTML textContent
 * children childNodes firstChild lastChild firstElementChild lastElementChild
 * classList
 *
 * document properties:title body images forms links children
 *
 * types of arrays in DOM: HTMLcollection(getElement or children) NodeList(with query)
 * NamedNodeList(with attributes) DOMTokenList(with classes) StyleSheetList(when accessing styleSheets)
 */
