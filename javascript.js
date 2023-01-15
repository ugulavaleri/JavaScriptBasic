/* variable types */

let UserName = "nina";
let age = 19;
let isadult = true;
const UserEmail = "gggg@gmail.com";
let job = null;
let lastname = undefined;

/* Math operations */

console.log("\n");

let x = 10;
let y = 6;
let sum = x + y;
let deduct = x - y;
let product = x * y;
let allotted = x / y;
let remains = x % y;

console.log("Sum -  " + sum);
console.log("Deduct -  " + deduct);
console.log(`product - ${product}`);
console.log(`allotted - ${allotted}`);
console.log(`remains - ${remains}`);

/* Two way of Adding strings */

console.log("\n");

let string1 = "Hello";
let string2 = "World";
let string3 = "!!!";

let added_strings1 = string1 + " " + string2 + string3;
let added_strings2 = `${string1} ${string2}${string3}`;

console.log("added by '+' - " + added_strings1);
console.log(`added by template literals - ${added_strings2}`);

/* Area of the rectangle */

console.log("\n");

function calculateRecarea(length, width) {
    return length * width;
}

console.log(`area of the rectangle - ${calculateRecarea(7, 5)}`);

/* Area of the circle */

var radius = 7;
const PI = 3.14159;

console.log(`Area of the circle - ${radius * radius * PI}`);
