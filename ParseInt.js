//JavaScript parseInt() function (or a method) is used to convert the passed-in string parameter or value to an integer value itself. This function returns an integer of the base which is specified in the second argument of the parseInt() function. 

function convertStoI() {
    let a = "100";
    let b = parseInt(a);
    console.log("Integer value is " + b);
    let d = parseInt("3 11 43");
    console.log('Integer value is  ' + d);
}
convertStoI();

//Using the Unary Operator: In Javascript, the Unary operator(+) is used to convert a string, boolean, and non-string to a number.
// let age = "23";
// let name = "Manya";
const number = "Harsh";
const number2 = +number;
console.log(typeof(number2))
// console.log(+age);
// console.log(+name);
// console.log(+number);