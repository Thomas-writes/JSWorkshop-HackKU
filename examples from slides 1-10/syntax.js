//this file won't run with nodejs because of the end
//feel free to comment it out and tun if you want 
/*
These are for multi-line comments
*/
//let is block scoped
let x = 5
//var is function or globally scoped
var y = 10
//const is for constants
const name = "Thomas"

//if statement
let num = 10;
if (num > 10) {
    console.log("Number is greater than 10");
} else if (num == 10) {
    console.log("Number is 10");//this outputs
} else {
    console.log("Number is less than 10");
}
//switch statement
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("It's an apple!"); //this outputs
        break;
    case "banana":
        console.log("It's a banana!");
        break;
    default:
        console.log("Unknown fruit");
}
//for loop
for (var i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
//for loop variation
let arr = [10, 20, 30];
for (let num of arr) {
    console.log(num); // 10, 20, 30
}
//while loop
var j = 0;
while (j < 5) {
    console.log(j); // 0, 1, 2, 3, 4
    j++;
}
//do-while loop
let k = 0;
do {
    console.log(k); // 0, 1, 2, 3, 4
    k++;
} while (k < 5);

//function with no parameters
function testFunc(){
    return "Word";
}
console.log(testFunc()); // word

//function with parameters
function testFunc2(input){
    return `Word ${input}`;
}
console.log(testFunc2("Word2")); // Word Word2

//arrow function
const square = x => x * x;
console.log(square(4)); //16

//mapping
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // 2, 4, 6, 8

//DOM Elements
//id accessing
let element = document.getElementById("elementID")
//class accessing
let element2 = document.getElementsByClassName("elementClass")
//Tag Accessing
let element3 = document.getElementsByTagName("p")