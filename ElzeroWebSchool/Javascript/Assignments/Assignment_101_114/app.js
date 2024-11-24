/*******************assignment1 */
/*let numbers = window.prompt("Print Number From – To", "Example: 5-20");
let numbersArr = numbers.split("-");
console.log(numbersArr);
let DataDiv = "";
if (+numbersArr[0] < +numbersArr[1]) {
  for (let i = 0; i <= numbersArr[1] - numbersArr[0]; i++) {
    DataDiv = document.createElement("div");
    DataDiv.innerHTML = +numbersArr[0] + i;
    console.log(DataDiv);
    document.body.append(DataDiv);
  }
} else {
  for (let i = 0; i <= numbersArr[0] - numbersArr[1]; i++) {
    DataDiv = document.createElement("div");
    DataDiv.innerHTML = +numbersArr[1] + i;
    document.body.append(DataDiv);
  }
}*/
// 10-15

/*10;
11;
12;
13;
14;
15;
// 20-10
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;*/
/*************************************** */
/*********Assignment 2****************** */
let popWindow = document.querySelector("#pop-up-window");
let btn = document.querySelector("button");

/**that's a very important note that cssText overwrite the whole css rules for an element */
setTimeout(function () {
  popWindow.style.display = "block";
  btn.style.display = "inline-block";
  popWindow.style.zIndex = "100";
  btn.style.zIndex = "100";
  document.body.style.backgroundColor = "#E5E5E5";
}, 5000);

btn.onclick = () => {
  popWindow.style.display = "none";
  btn.style.display = "none";
  document.body.style.backgroundColor = "white";
};
/*************************************** */
/*********Assignment 3****************** */
/**very important note the innerHTML returns a string */
/*let DataShowDiv = document.querySelector("#counter");

let counter = setInterval(function () {
  if (DataShowDiv.innerHTML === "0") {
    clearInterval(counter);
  } else {
    DataShowDiv.innerHTML -= 1;
  }
}, 1000);*/
/*************************************** */
/*********Assignment 4****************** */
/**very important note the innerHTML returns a string */

/*let DataShowDiv = document.querySelector("#counter");
let counter = setInterval(function () {
  if (DataShowDiv.innerHTML === "0") {
    window.location.href = "https://elzero.org/";
  } else {
    DataShowDiv.innerHTML -= 1;
  }
}, 1000);*/

/*************************************** */
/*********Assignment 5****************** */
let DataShowDiv = document.querySelector("#counter");

let counter = setInterval(function () {
  if (DataShowDiv.innerHTML === "0") {
    clearInterval(counter);
  } else if (DataShowDiv.innerHTML === "5") {
    window.open("https://elzero.org/", "_blank", "width=500 height=500");
  } else {
    DataShowDiv.innerHTML -= 1;
  }
}, 1000);
