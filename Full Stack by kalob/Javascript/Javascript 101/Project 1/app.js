console.log("external script baby");
var nameUser = "kalob";          //name is probably a something in javascript so don't use this variable naming
var linky= "https://www.google.com";
console.log(nameUser);
let height= "6'0\"";
if(nameUser=="Kareem"){
    height= "6'2\"";
}
const size ="Xl";
console.log("nameUser:",nameUser," Height:",height," size:",size);
const num= 3.14;
console.log(num);

if(nameUser=="kalob"){
    console.log("this is kalob");
}
else if(nameUser=="Kareem"){
    console.log("this is kareem");
}
else{
    console.log("idk this user");
}
if(num>=3.14){
    console.log("this is PI or more");
}
let user= {            /*don't forget the equal sign*/
    'name':'kareem',
    'job': 'student',
    'age': '31'
}
let machine ={
    'function':"laptop",         /*so not in the declaration or the usage that double or single matter but use ' preferably as standard*/ 
    'type': 'lenovo'  
}
let boj ={
    'user': 'object',      /*don't forget the comma*/
    'arr': [3,3,4,5]         /*you don't give the number of elements here to the array you just type the elements*/
}
let selecty=document.getElementById("box");

let str="this is a long string 4so we can try the builtin 5methods in the language";
/*let myNum=prompt("enter your age sir"); /*i try to cast variables here*/
let age=66;
console.log("this is my name",nameUser,"this is my age",age);/*the comma by itself adds a space */
const phrase= "this is my name "+nameUser +" this is my age "+age;/**you have to precise with the spaces  */
console.log(phrase);
const phrase2= `this is my name ${nameUser} this is my age ${age}`; /**also you have to be precise withe the spaces */
console.log(phrase2);

/** */

let arr=[1, 2, "three", [34, 45, 65], { 
                                        'name': "schneider",
                                        'age': 64
}]
console.log(arr[3][2]);     /**you access multi dimensional array the ordinary way */
console.log(arr[4]['name']);
arr.push("seven");
console.log(arr);
let newItem=arr.pop("seven");
console.log(arr);
console.log(newItem);

/** */

arr.forEach(num =>{
    console.log(num);
})

for(let i=0; i<arr.length ; i++){
    console.log(arr[i]);
}

/** */

let array=document.querySelectorAll("li");
array.forEach(num=>{
    console.log(num);
})
array.forEach((num,index)=>{
    num.innerText=`this is item number ${index+7}`;
})
array.forEach(num=>{
    num.classList.add("classy");
})

/** */

function multiply (num1 , num2){        /*if you want to see results on the console don't combine console with return*/ 
    let total= Number(num1) * Number(num2) ;
    return total;
}                   /**idk why javascript has a positive and a negative zero try it out */

/** */

function multiplyNumbers(nameUser, ...numbers){
    let total=0;
    for(index in numbers){
        total=total+numbers[index];
    }
    console.log(`${nameUser} total is ${total}`);
}
function test(...numbers){      /**see numbers is being treated as an array but again it displays object when you use typeof */
    let total= numbers[0]-numbers[1];
    console.log(typeof(numbers));
    return total;
}

/** */

let student={
    'nameUser': 'kareem',
    'age': 35,
    'fn': function(num=3){
        console.log(`total = ${Number(num)}`);
    },
    'fn2': function getty(num=3){             /*so whenever you assign a key or a variable to a function you have to use the var*/ 
        console.log(`total = ${Number(num)}`);
    },
    talk(sound="meow"){
        console.log(`this is the sound of ${String(sound)}`);
    }
}

/**my testings  */
let totally=2;  /**so obviously you can use totally in the fn i don't know why kalob say he couldn't */
const fn= function getTime(time="00:00"){  /*so whenever you assign a key or a variable to a function you have to use the var*/
    console.log(String(time));
    console.log(totally);
}