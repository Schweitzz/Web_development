/**implement the delete part later */

let inputField = document.querySelector("#one");
let showDataDiv = document.querySelector("#showData");

let addbtn = document.querySelector("#add");
/**to show nothing while the start of the program */
let numberOfTasks = 0;
if (+numberOfTasks === 0) {
  showDataDiv.style.display = "none";
}
/**to show stuff when reload */
if (window.sessionStorage.length > 0) {
  for (let i = 1; i <= window.sessionStorage.length; i++) {
    showDataDiv.style.display = "block";
    let createdDiv = document.createElement("div");
    createdDiv.append(window.sessionStorage.getItem(`${i}`));
    createdDiv.style.cssText = `display: inline-block; width: 780px; height: 60px; border-radius: 5px;
    background-color: white;   padding: 10px; margin-bottom: 10px`;
    numberOfTasks += 1;
    console.log(numberOfTasks);
    if (numberOfTasks > 1) {
      showDataDiv.style.height = `${85 * numberOfTasks}px`;
    }
    showDataDiv.append(createdDiv);
  }
}

/**to show elements when clicked  */
addbtn.onclick = function () {
  showDataDiv.style.display = "block";
  let createdDiv = document.createElement("div");
  createdDiv.innerHTML = inputField.value;
  createdDiv.style.cssText = `display: inline-block; width: 780px; height: 60px; border-radius: 5px;
   background-color: white;   padding: 10px; margin-bottom: 10px`;
  numberOfTasks += 1;
  console.log(numberOfTasks);
  if (numberOfTasks > 1) {
    showDataDiv.style.height = `${85 * numberOfTasks}px`;
  }
  window.sessionStorage.setItem(`${numberOfTasks}`, createdDiv.innerHTML);
  showDataDiv.append(createdDiv);
};

console.log(sessionStorage);
