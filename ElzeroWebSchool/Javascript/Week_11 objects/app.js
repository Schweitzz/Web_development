/**video79 
 * Object
Intro and What Is Object
Testing Window Object
Accessing Object
*/
let student = {
  theName: "Kareem",
  Age: 22,
  saySomething: (_) => {
    return "Hello World";
  },
};
/**note the equal sign here is colon and this logic because it's a property not a variable
 * meaning that it's associated with the object not like on its own and the same goes for the function and even the function is end
 * with comma like others and best practice the last element also end with comma
 */

/**
 * Object video_80
Dig Deeper
Dot Notation vs Bracket Notation
Dynamic Property Name
 */
let theName = "Mohamed"; /**different scope no need to worry  */
let theAge = "myAge";

let student2 = {
  theName: "Ahmed",
  country: "Egypt",
  "1country": "germany ",
  myAge: 23,
};
/**as the variables inside the object are properties you can write them in "" if the identifier is valid the formatter
 * would remove it but if not valid will keep it
 * to access this "" property you have to use the bracket notation
 */
console.log(student2.theName);
console.log(student2.country);
console.log(student2["1country"]);
console.log(student2["country"]); //you can also access other properties with it but you have to put it in "" here
console.log(student2[theAge]); //this is called dynamic property as the bracket get things evaluated
/**vary important note you don't add " " with dynamic properties */

/*** Object video_81
 * nested objects and trainings
 */

let available = true;

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    /**here we have different levels of nestings */
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return "free";
    } else {
      return "not free";
    }
  },
};
console.log(user.skills);
console.log(user.skills[1]);
console.log(user.skills.join("|"));
console.log(user.addresses);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one); //don't forget the " " with the bracket notation
console.log(user["addresses"].egypt["one"]);
console.log(user["addresses"]["egypt"]["one"]);

/**as properties are not on their own if you need a property in a logic you have to get it from the object first  */
console.log(user.checkAv()); //if you put available you will talk to the global variable you have to use user.available

/*** Object video_82
 * nested objects and trainings
 */
/**you can create an empty object and assign new properties or methods in the road also you can update */

let user3 = new Object({
  age: 22,
});

/**let user= new Object();     //empty object */
console.log(
  user3
); /**notice how it appears also with other properties when you press arrow */
user3.age = 33;
user3["1country"] = "Egypten";
user3.saySomething = (word) => {
  return `${word}`;
};
console.log(user3);
console.log(user3.age);
console.log(user3["1country"]);
console.log(user3.saySomething("Hello World!"));

/** Objects video_83
 * Function this Keyword
- this Introduction
- this Inside Object Method
    - When a function is called as a method of an object,
      its this is set to the object the method is called on.
- Global Variables With Window And This
- Global Context
- Function Context

Search
- Strict Mode
    it's always better to use strict mode as it gives you more error if they are silent and it's more safe and performant
 */

console.log(this);
console.log(this === window);
console.log(typeof this);

myVar = 100; //any variable or function we declare become properties and methods for the window object if you don't assign them
// to other objects
console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(this);
}

sayHello();
window.sayHello();

/**this is widely used to get the object responsible for something without any hard logic */

/**here function is anonymous function assigned to the button object so this returns the object */
document.getElementById("cl").onclick = function () {
  console.log(this);
};
/**as you can see button became an object  */
console.log(typeof document.getElementById("cl"));
console.log(typeof document.getElementById("aa"));
/**any html element is an object */

let user4 = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
  test: {
    say: function () {
      return this;
    },
  },
};

console.log(user4.age);
console.log(user4.ageInDays());
console.log(user4.test.say()); /**gets the nearest object */

/** Objects video_84
 * create new object with the create keyword
 */
console.log("######################");
let user5 = {
  age: 40,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user5);
console.log(user5.age);
console.log(user5.doubleAge());

/**in the arguments of create you provide the template for the object */
let obj = Object.create({});
obj.a = 100;
console.log(obj);
console.log("###################");
/**and you can pass a previously created object  */
let copyObj = Object.create(user5);

/**here copyObj has no properties but it only follows the properties of another object
 * but this is only for the start if you update them he will have his own
 */
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

let copyObj2 = Object.create(user5);

copyObj2.age = 44;
/**you can see here that the object gained his property now and of course there will be a
 * way with the constructor to make these default values different
 */
console.log(copyObj2);
console.log(copyObj2.age);
console.log(
  copyObj2.doubleAge()
); /**notice here if you don't update the fn it depend on the property user5.age 
so better way is to change it to this.age in the template object so yeah he doesn't get the function as 
its method but when it gets executed from inside it this refer to it*/

/** Objects video_85
 * create new object with the create assign
 */
/**assign is more powerful and ignore all bad stuff above unless you want your object to follow the old one*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetedObj = {
  prop1: 100,
  prop3: 3,
};
/**if he find that there is property with the same name it takes the value of the object i assign from
 *
 */

/*let newObj = Object.assign(targetedObj, obj1); /**you can assign more than one object  */
//console.log(newObj);

console.log(targetedObj);
targetedObj = Object.assign(targetedObj, obj1); //you can assign it to itself as of updating it
console.log(targetedObj);

/**you can build completely new object depending on a template and also add some properties to it*/
let newObj = Object.assign({}, targetedObj, { prop5: 5, prop6: 6 });
console.log(newObj);

/**imp note object is not structures as they are not just templates they have values but they are kinda similar
 * and not classes as you cannot create object from them
 */

/**that's a good note */
let testy = "hello";
let objj = {
  testy,
};
console.log(objj);
