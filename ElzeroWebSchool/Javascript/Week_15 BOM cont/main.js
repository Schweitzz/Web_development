/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/
/**local storage is the object that is basically responsible for the memory if you need to store data after you close the window
 * but doesn't work with private windows
 * there is no time limit for this storage
 */
/**very important note see even if i comment the set part it's still stored no matter how many times you reload or close
 * the window or tab so the only way to remove it is to remove the key
 */
// Set
/*window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);*/

// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(
  window.localStorage.key(0)
); /**keys are stored alphabetically but when it show you in the application tab is shows in the 
order you set it */

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/
/**very important note that data from storage is retrieved as a string */
/*let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

/**this block to hold the state when the browser is closed*/
/*
if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  /**he query about the li that has the same color as the localStorage */
/**note that you can query with attribute with the square brackets */
// [3] Add Active Class To Current Color
/*document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}
/** this block to handle the event of clicking */
/*
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});*/

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
   LocalStorage or sessionStorage setItem getItem  removeItem clear  key

 */
