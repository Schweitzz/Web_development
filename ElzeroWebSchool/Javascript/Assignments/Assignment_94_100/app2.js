let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");

let divClasses = document.querySelector("#A2");

let showDiv = document.querySelector(".classes-list");
function showClasses() {
  let sortedWords = [...divClasses.classList].sort();
  console.log(sortedWords);
  showDiv.innerHTML = sortedWords.join(" ");
}

addInput.onblur = () => {
  let addedClasses = addInput.value;
  let addedArr = addedClasses.split(" ");

  for (let i = 0; i < addedArr.length; i++) {
    console.log(addedArr[i]);
    divClasses.classList.add(addedArr[i].toLowerCase());
  }
  console.log(divClasses);
  showClasses();
};
removeInput.onblur = () => {
  let removedClasses = removeInput.value;
  if (removedClasses === "") {
  } else {
    let removedArr = removedClasses.split(" ");
    for (let i = 0; i < removedArr.length; i++) {
      divClasses.classList.remove(removedArr[i].toLowerCase());
    }
  }
  console.log(divClasses);
  showClasses();
};
/*********************************assignment3  */
let myP = document.querySelector("p");
myP.remove();
let beforeDiv = document.createElement("div");
let afterDiv = document.createElement("div");
beforeDiv.class = "start";
beforeDiv.title = "Start Element";
beforeDiv.setAttribute("data-value", "Start");
beforeDiv.innerHTML = "Start";

afterDiv.class = "emd";
afterDiv.title = "End Element";
afterDiv.setAttribute("data-value", "End");
afterDiv.innerHTML = "End";

let myDiv = document.querySelector(".our-element");
myDiv.before(beforeDiv);
myDiv.after(afterDiv);

/*********************************************** */
/*********************************assignment4  */
let myDiv4 = document.querySelector("#A4");
/**just see the difference but it's not part of the solution */
/*console.log(myDiv4.textContent);
console.log(myDiv4.innerText);*/
console.log(myDiv4.childNodes[4]); /**idk about the whitespace */
/*********************************************** */
/*********************************assignment5  */
document.addEventListener("click", (event) => {
  console.log("this is", event.target.tagName);
});
