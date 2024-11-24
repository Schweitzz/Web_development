window.onload=function(){
    document.querySelector("h1").style.color="Blue";
}
document.write('<h1 style="color:red ;font-size:50px">this is a heading</h1>'); /*you give the style while creating the element */
/**if you have multiple style properties don't forget to space them with semicolon in this form */
document.write('<h1 class="test">this is a heading</h1>');
document.querySelector("h1.test").style.color="green";
document.querySelector("h1.test").style.fontSize="40px";         /**css properties names turn to camelcase */
/**you can combine these two by using variables or even with other ways that are wow*/

/**********************assignment 3 */
console.log("%cElzero %cWeb %cSchool","color:red ; font-size:40px;" ,"color:green; font-weight: bold; font-size:40px;", "color:blue; font-size :40px;")

/**assignment 4 */
        console.group("Group1");
        console.log("Element 1");
        console.log("Element 2");
        console.group("Subgroup 1");
        console.log("Message in Subgroup 1");
        console.log("Another message in Subgroup 1");
        console.group("Subgroup 1");
        console.log("Message in Subgroup 1");
        console.log("Another message in Subgroup 1");
        console.groupEnd(); // Ends Subgroup 1
        console.groupEnd(); // Ends Subgroup 1
     
        console.group("Subgroup 2");
        console.log("Message in Subgroup 2");
        console.log("Message in Subgroup 2");
        console.groupEnd(); // Ends Subgroup 2

        console.log("Another message in Main Group");
        console.groupEnd(); // Ends Main Group



/**assignment 5 */
console.table(["Elzero","Ahmed","Kareem","Ame","Mokhtar"]);