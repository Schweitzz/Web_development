/**DOM

What Is DOM

DOM Selectors

Find Element By ID
Find Element By Tag Name
Find Element By Class Name
Find Element By CSS Selectors
Find Element By Collection
Elements:

title
body
images
forms
links 
*/

/**there is a speed comparison between getting elements methods
 */
let ElementByID = document.getElementById("my-div");
let ElementByClass = document.getElementsByClassName("my-span"); //HTMLcollection
/**Live Collection: An HTMLCollection is live, meaning it automatically updates when the document changes. If you add or remove elements that match the criteria, the collection will reflect these changes immediately.
Array-like but Not an Array: Although you can access elements using an index (e.g., collection[0]), 
an HTMLCollection does not have all the methods that arrays have. For example, you can’t use map(), forEach(), 
or filter() directly on an HTMLCollection.
Methods and Properties: HTMLCollections have specific methods like item(index) and properties like length. */

/**any thing that return an array you can access it with indexing */
let ElementByTag = document.getElementsByTagName("p");

let ElementQuery1 = document.querySelector("p");
let ElementQuery2 = document.querySelector("#my-div");
let ElementQuery3 = document.querySelector(".my-span");
let ElementQuery4 = document.querySelectorAll("p"); //NodeList
/**this return NodeList and look for the difference with the HTMLcollection */
/**notice the querySelector accept anything but you have to specify  */
//if you use querySelector with class that is applied to multiple elements it will get the first only

console.log(ElementByID);
console.log(ElementByClass);
console.log(ElementByTag[0]);
console.log(typeof ElementByTag); //this is actually an object
console.log(ElementQuery1);
console.log(ElementQuery2);
console.log(ElementQuery3);
console.log(ElementQuery4); //NodeList
console.log(ElementQuery4[1]);
console.log(typeof ElementQuery4); //this is actually an object
console.log(document.title);
console.log(document.body); /**return the whole body */
console.log(document.forms[0].one.value); /**you can access the form with its name */
console.log(document.links[1].href); //this is from an HTMLcollection

/*DOM [Get / Set Elements Content And Attributes] 

innerHTML
textContent
Change Attributes Directly
Change Attributes With Methods
getAttribute
setAttribute

Search
innerText
*/
/**so the difference between these two is textContent ignore the html inside the element  */
let textElement = document.querySelector(".js");
console.log(textElement.innerHTML);
console.log(textElement.textContent); //with it you can write the HTML entities without remembering the way

/**you can access the images links forms through their properties in the document object */
/**it's only one image but it's also index zero */
/**notice here that however the attributes wasn't assigned yet it appears */
console.log(document.images[0]);
console.log(document.images[0].src); //if empty will return this file path /**couldn't this be used in hacking */
/*console.log(document.images[0].alt);*/
document.images[0].src = "https://www.google.com"; /**you have to write https */
document.images[0].alt = "Hello2";
//document.images[0].title = "Hello3";
document.images[0].id = "imagy"; /**you can even assign new attribute */
let arr = document.images;
console.log(arr); /**notice it's one element but somehow look like two */
console.log(arr[0]);
let img = document.querySelector("img");
console.log(img.getAttribute("src"));
img.setAttribute("src", "https://www.twitter.com"); //notice that this fn returns undefined
img.setAttribute("title", "this is an image");
console.log(img);
console.log(document.images[0].src);
/*****imp note the browser update the elements attribute live even if you logged it before the update but this is not the case
 * for the attributes individually and actually it makes since because what if you want to output older attribute value
 * so note that the element will be logged lastly updated even if the attributes are updated later in the script
 */

/**DOM [Check Attributes]

Element.attributes
Element.hasAttribute
Element.hasAttributes
Element.removeAttribute */

/**this will return a NamedNodeMap */

let elementAttributes = document.getElementById("ccc").attributes;
console.log(elementAttributes); //NamedNodeList
console.log(typeof elementAttributes); //object

let elementV3 = document.getElementById("ccc");
if (elementV3.hasAttribute("title")) {
  elementV3.removeAttribute("title");
} else {
  elementV3.setAttribute("title", "Nah");
}

if (elementV3.hasAttributes()) {
  console.log("yes it does");
}

console.log(elementV3.hasAttributes());

/*DOM [Create Elements]

createElement
createComment
createTextNode
createAttribute
appendChild*/

/**the attribute is considered an object */
/**The DOM is often visualized as a tree structure:

Root Node: The document itself (document object).
Branch Nodes: Elements that can contain other nodes (like a <div> containing <p> tags).
Leaf Nodes: Nodes that do not have any children (like text nodes or comment nodes).
note that html body and head are elements nodes and the elements inside them like meta title and divs are also elements nodes then
comes the text comment and attribute nodes */

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myAttr2 = document.createAttribute("data-custommm");
let myAttr3 = document.createAttribute("data-c");
console.log(myAttr2); //output as attribute
console.log(typeof myAttr2); //object
/**this method is the only one that has the word node in it */
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

/**so you have three ways to add an attribute to the element
 * the first is like myElement.className but here you can't add a custom attribute it has to exist
 * the second is by createAttribute then setAttributeNode then set its value
 * the third is by setAttribute directly put the name of attribute and then the value
 */
myElement.className = "product"; /**className not class because their is classlist property */
myElement.src = "product"; /***very imp it will not be added  */
myElement.id = "tt";
myElement.osama = "osama"; /**if you try attribute that isn't present this way won't add it for you  */
myElement.myAttr3 = "naaah"; /**even if you used a variable that has attribute in it */
/**in order to use any of these you either use it directly even if the attribute doesn't exist it will add it for you
 * or create the attribute first then add it
 */
/**the nodes point */

myElement.setAttributeNode(myAttr); /**here you just add the attribute without the value */
//myElement.setAttributeNode("title"); /**this only accept attributes */
myElement.setAttribute("data-test", "Testing");
myElement.setAttribute("title", "Testing"); //dude this function is beast
myElement.setAttribute(
  "myAttr2",
  "Testing"
); /**but it only accept strings to be attributes or variables than has strings */

console.log(myElement);
// Append Comment To Element
myElement.appendChild(myComment); // you append the comment as of child node inside the element
myElement.appendChild(myText); /**append put the thing at last */

/**notice till this moment myElement is still a variable here wasn't displayed on the page */
document.body.appendChild(myElement);

/**video 90
 * make a div with class that has h3 that has paragraph and text and repeat it in the page 100 times
 */
/**imp note when you append the exact same element again in the body instead of repeating it the element gets moved to the end */
/***just commented it so i can see the page */
/*let myElement90 = "";
for (let i = 0; i < 100; i++) {
  myElement90 = document.createElement("div");
  myElement90.class = "osama";
  let myElement90Child = document.createElement("H3");
  let myElement90ChildText = document.createTextNode("this is H3");
  let myElement90GrandChild = document.createElement("p");
  myElement90Child.appendChild(myElement90ChildText);
  myElement90Child.appendChild(myElement90GrandChild);
  myElement90.appendChild(myElement90Child);
  document.body.appendChild(myElement90);
}

console.log(myElement90);
console.log(document.body);*/

/**DOM [Deal With Children]

children
childNodes
firstChild
lastChild
firstElementChild
lastElementChild */

/**the same difference between the elements and nodes applies here */

let myElement91 = document.querySelector("#v91");
console.log(myElement91);

console.log(myElement91.children); //HTMLcollection
console.log(myElement91.children[0]);
console.log(myElement91.childNodes); //NodeList but it doesn't get the attributes
console.log(myElement91.childNodes[0]);
/**notice the whitespaces between the tags are considered nodes but if there are text they are taken with is  */
console.log("################");
/**there is some confusion with the naming here */
console.log(myElement91.firstChild); //nodes
console.log(myElement91.lastChild);
console.log(myElement91.firstElementChild); //elements
console.log(myElement91.lastElementChild);

/**video92 DOM [Event Handlers]

onclick
oncontextmenu
onmouseenter
onmouseleave

onload
onscroll
onresize

onfocus
onblur
onsubmit 
*/
/**you use events to have action once the event happens */
/**you can either use it in js or html html of course if the code is minimal but it's not recommended at all  */

let myElement92 = document.querySelector("#v92");
myElement92.onclick = function () {
  console.log("clickedd");
};

/** DOM [Events]

Validate Form Practice
Prevent Default
*/

/**How the Event Object is Created
Event Creation:
When an event (like a click) occurs on an element (in this case, a link), 
the browser creates an Event object. This object contains all the information about the event,
 including details like the type of event, the target element, and any other relevant information.
Event Propagation:
The event object is created and populated by the browser when the event 
is triggered. It is then passed to the event handler function automatically.
Event Handling:
When the event handler function (in this case, the anonymous function 
assigned to onclick) is called, it receives the event object as its first parameter. 
This allows you to interact with and manipulate the event in your code. */

let userInput = document.querySelector("[name='username']"); /**you can query an input with its name */
let ageInput = document.querySelector("[name='age']");
console.log(document.querySelector("[name='username']"));
console.log(document.querySelector("[name='age']"));
console.log(document.forms[3].age);

document.forms[3].onsubmit = function (e) {
  console.log(e);
  console.log("enter"); /**note for the point that the log disappear after the event finishes unlike the onclick
  in fact it doesn't disappear but the point is that submit and returning from the link require the page to load and when it 
  load again it won't execute the log because the event doesn't happen  */
  /*for (let i = 0; i < 10000; i++) {
    console.log("enter");
  }*/
  let userValid = false;
  let ageValid = false;

  console.log(userInput.value);
  console.log(userInput.value.length);
  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[3].onclick = function (event) {
  console.log(event);
  console.log("ahmed");
  //event.preventDefault();     //note when i changed the target of the link the log is still present
};
/** really good trick if you want the user to submit but the site doesn't refresh use the prevent default */
/**all the methods:
 * getElementById,getElementByClassName, getElementByTagName, querySelector, querySelectorAll (find element) and they all start with the document object
 * getAttribute, setAttribute (change in attributes)
 * Element.attributes, Element.hasAttribute, Element.hasAttributes, Element.removeAttribute (check attributes)
 * createElement createAttribute createTextNode createComment setAttribute setAttributeNode appendChild (create anything)
 * onclick oncontextmenu onmouseenter onmouseleave onload onscroll onresize onfocus onblur onsubmit
 *
 * the properties you can use:
 * innerHTML textContent
 * children childNodes firstChild lastChild firstElementChild lastElementChild
 *
 * document properties:title body images forms links children
 *
 * types of arrays in DOM HTMLcollection NodeList NamedNodeList
 */

/*try using the event once with the form and another with the input field*/
