/****************assignment  1 */
/*let myElement = document.getElementById(elzero);
console.log(myElement);

myElement = document.getElementsByName("js"); //this returns NodeList
console.log(myElement);

myElement = document.getElementsByClassName("element");
console.log(myElement);*/
/**this is 4  with the tag*/

myElement = document.querySelector("[name=js]"); //it works just fine you don't need to add ''
console.log(myElement);
/**so this is 8 */
/**and you can use child and childNodes firstChild and lastChild */

/*************************************************** */
/****************assignment  2 */

let myElements = document.querySelectorAll(".change-alt1");
for (let i = 0; i < myElements.length; i++) {
  myElements[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  myElements[i].alt = "elzero logo";
}
console.log(document.body);

/*************************************************** */
/****************assignment  3 */
let myElement3 = document.forms[0];

let displayResult = function () {
  let result = document.querySelector(".result");
  let result2 = myElement3.dollar.value;
  console.log(result2);
  result.innerHTML = `${myElement3.dollar.value} USD Dollar = ${(myElement3.dollar.value * 49.1).toFixed(
    2
  )} Egyptian Pound`;
};
/**this one is for the enter key  */
/*myElement3.addEventListener("submit", function (e) {
  e.preventDefault();
});*/

/**this one for just typing */
/*myElement3.addEventListener("input", displayResult);*/

/**you can actually use the on events */
myElement3.oninput = displayResult;
myElement3.onsubmit = function (event) {
  event.preventDefault();
  //notice in the both ways even tho i didn't add the fn when the submit happens the input is considered new and log again
};

/*************************************************** */
/****************assignment  4*/
let myElement4 = document.querySelector(".one");
let myElement41 = document.querySelector(".two");

let temp = "";
temp = myElement4.title;
myElement4.title = myElement41.title;
myElement41.title = temp;

temp = myElement4.innerHTML;
myElement4.innerHTML = myElement41.innerHTML;
myElement41.innerHTML = temp;
myElement41.innerHTML += " 2";

console.log(myElement4);
console.log(myElement41);

/*************************************************** */
/****************assignment  5*/
let myElementArr = document.querySelectorAll(".change-alt");
for (let i = 0; i < myElementArr.length; i++) {
  console.log(myElementArr[i].getAttribute("alt"));
  if (myElementArr[i].hasAttribute("alt")) {
    myElementArr[i].setAttribute("alt", "Old");
  } else {
    myElementArr[i].alt = "Elzero New";
  }
  console.log(myElementArr[i]);
}

/*************************************************** */
/****************assignment  6*/

let myElement6 = document.forms[1];
let elementsNumber = "";
let elementsText = "";
let elementsType = "";
let elementCreated = "";
let result = document.querySelector(".results");
myElement6.onsubmit = function (e) {
  result.innerHTML = "";
  elementsNumber = myElement6.elements.value;
  elementsText = myElement6.texts.value;
  elementsType = myElement6.type.value;

  for (let i = 0; i < elementsNumber; i++) {
    elementCreated = document.createElement(`${elementsType}`);
    elementCreated.innerHTML = elementsText;
    if (elementsType === "img") {
      elementCreated.alt = "show me"; /**notice the images didn't appear at first cuz no source */
    }
    result.appendChild(elementCreated);
  }
  e.preventDefault();
};
/*************************************************** */
