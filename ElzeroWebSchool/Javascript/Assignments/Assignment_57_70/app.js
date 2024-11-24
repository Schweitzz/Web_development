/**task1 */
function sayHello(theName, theGender = "") {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/**********************task2 ********************/
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  }
  if (operation === "add") {
    console.log(Number(firstNum) + Number(secondNum));
  } else if (operation === "subtract") {
    console.log(Number(firstNum) - Number(secondNum));
  } else if (operation === "multiply") {
    console.log(Number(firstNum) * Number(secondNum));
  } else {
    console.log(Number(firstNum) + Number(secondNum));
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

/**********************task3 ********************/
function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    const monthsInYear = 12;
    const daysInYear = 365.25; // Accounting for leap years
    const hoursInDay = 24;
    const minutesInHour = 60;
    const secondsInMinute = 60;

    // Output results
    console.log(`Age in years: ${theAge}`);
    console.log(`Age in months: ${theAge * monthsInYear}`);
    console.log(`Age in days: ${theAge * daysInYear}`);
    console.log(`Age in hours: ${theAge * hoursInDay * daysInYear}`);
    console.log(
      `Age in minutes: ${theAge * minutesInHour * hoursInDay * daysInYear}`
    );
    console.log(
      `Age in seconds: ${
        theAge * secondsInMinute * minutesInHour * hoursInDay * daysInYear
      }`
    );
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

/***i have already done 4 as a challenge but here you can do it with if condition would be so much easier */
/**********************task5 ********************/
function createSelectBox(startYear, endYear) {
  document.write("<select>");
  for (let counter = startYear; counter <= endYear; counter++) {
    document.write(
      `<option value="${counter}">${counter}</option>`
    ); /**in document.write you either use the `` or "" depending on the situation but both work but don't put them together*/
  }
  document.write("</select>");
}
createSelectBox(2000, 2021);

/**********************task6 ********************/
function multiply(...numbers) {
  let sum = 1;
  for (let counter = 0; counter < numbers.length; counter++) {
    if (typeof numbers[counter] === "string") {
      continue;
    } else if (Number.isInteger(numbers[counter]) !== true) {
      /**you can't check for float  */
      numbers[counter] = Math.floor(numbers[counter]);
    }
    sum *= numbers[counter];
  }
  console.log(sum);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

console.log("have a break buddy");
/**********************task1 in the new week ********************/
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let counter = 0;
    for (counter; counter < zName.length; counter++) {
      if (zName[counter] === " ") {
        break;
      }
    }
    zName = zName.slice(0, counter + 2);
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    zName.charAt(counter + 1).toUpperCase();
    return `${zName.slice(0, counter + 1)}${zName
      .charAt(counter + 1)
      .toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    /*let vv = "32Hello";
    console.log(Number(vv));*/ /**Number doesn't extract a number from a mixed string */
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return `You Live In ${zCountry.slice(0, 2)}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )} ${countryTwoLetters(zCountry)}`;
  }

  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

/**********************task 2 in the new week ********************/

function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

let itsMe2 = (_) => {
  return `Iam A Normal Function`;
};

console.log(itsMe2());

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let urlCreate2 = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(urlCreate2("https", "elzero", "org")); // https://www.elzero.org

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

let checker2 = (zName) => {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
};

console.log(checker2("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker2("Ahmed")("Not Available")()); // Iam Not Avaialble

const checker3 = (zName) => (status) => (salary) => {
  return status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;
};

console.log(checker3("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker3("Ahmed")("Not Available")()); // Iam Not Avaialble
