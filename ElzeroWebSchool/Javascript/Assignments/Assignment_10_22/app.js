let numberOne = 10,
  numberTwo = 20;
console.log(
  numberOne + "" + numberTwo
); /*console.log(String(numberOne)+String(numberTwo));*/ /**i make use of string implicit casting */
console.log(typeof (numberOne + "" + numberTwo)); //console.log(typeof(String(numberOne)+String(numberTwo)));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne} ${numberTwo}`);
console.log(String(numberOne) + "\n" + String(numberTwo));
console.log(`${numberOne}
${numberTwo}`);

/********************************* */
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object          /**look at the html file honey */

/********************************* */

let text =
  '`I\'m In\n\
\\\\\n\
Love \\\\ """ \'\'\'\n\
++ With ++\n\
\\"""\\"""\n\
""JavaScript""``';
console.log(text);

let a = 21;
let b = 20;

// Creating intermediate variables to avoid using a and b multiple times
let ab = `${a}${b}`;
let result = `_${a}_${ab}_${ab}_${ab}_${ab}_${b}_`;

console.log(result); // Output: "_21_2021_2021_2021_2021_20_"
console.log(`_${a}` + `_${ab}`.repeat(4) + `_${b}_`);

// Replace ? With Arithmetic Operators
/*console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); */ // 0 /*fuck you */
