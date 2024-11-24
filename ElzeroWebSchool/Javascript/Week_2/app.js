console.log(test);
console.log(window.test);
test.innerHTML = "Hello World!";
let x = 6;
/*console.log(test2); //  it only work with the id
test2.innerHTML - "Hello World!";*/

function sum() {
  sum = x + 5;
  console.log(sum);
}
sum(); /**let can be used as global no problems */
//sum(); note in js you can overwrite a function name with a value but then it's no longer a function
let Title = "Elzero",
  Description = "Elzero Web School",
  Date = "25/10";

let card = `
     <div>
        <h3>Hello ${Title}</h3>
        <p>${Description}</p>
        <span>${Date}</span>
    </div>
    this is a new 
    line
`;

let z = "ahmed";
let y = "amr";
let cardy = ` this is a new 
line`; /**notice what happens when you put \ or  \\ */

let cardyy = `${z}
${y}`;
document.write(card);
document.write(card);
document.write(card);
document.write(card);
document.write(cardy);
document.write(cardyy);

/**note that it only works with console so the template literal is not literal with the document */
console.log(card);
console.log(cardy);
console.log(cardyy);

let u = "Mokhtar";
console.log(z + y + u); /**this way need you to add the white spaces */
console.log(z, y, u);
console.log(`${z} ${y} ${u}`);

let g = "osama";
console.log(+g);
console.log(
  isNaN(g)
); /**notice this method return true even if it's not a NaN so be carful
it only work best with numbers i mean best at differentiating */
console.log("##############");
console.log(true);
console.log(false);
console.log(+true); //1
console.log(+false); //0
console.log(+true + true); //2
console.log(true - false); //1
console.log(true + false); //1
console.log(false + false); //0
console.log(true + true); //2
console.log(31 + true); //32
/**so they don't give numbers on their own you've to mix them */

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); /** a=12 b= 21 c=81 */
/** 11+20+80-11 */
//continue
// console.log(++a + -b + c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
