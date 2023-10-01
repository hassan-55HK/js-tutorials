"use strict" // this is to let know our brower to treat all js as newer version.

//There are Seven Primitive Data Types in JS. Let's explore each datatype below.

const userName = "Hassan"; //string

let userAge = 22; //Number

let a = true;

let b = false; //This is called boolean.

let userEmail = "abcd123@gmail.com"; // This is an undefined variable.

let userPassword = null; //This is null where the value is null it means that there might be some technical fault in server to fetch data.

/* Integers and Symbol we will cover both of these later
These all are Primaray Data Types.
*/

//There are two Reference Datatypes in JS. Let explore each below.

let obj = {
 userCar: "Civic",
 model: 2019,
 color: "Gray"
} //This is an object but before we go ahead i will let you know in a statement that what an object is? Im simple words an Object is a collection of Data.

let arr = [userAge,userPassword,"This an array while we can also add assigned variables in arrays"]

//typeof TYPEOF is used to know the type of a variabe either a variable is string or a number might be an object. Let's use typeof.

console.log(typeof userName);

console.log(obj)

console.log(arr) 
// If i want to access a single value of an array not all so how it is possible to do?

console.log(arr [1] + " It will print the second value of an array because 0 is considered as 1 in JS ");

//if I want to access a single value of an Object so How it is possible to do?

console.log(obj.userCar);

//convertion of datatypes in JS.

let newEmail = Number(userEmail);

console.log(typeof(newEmail))

console.log(newEmail) //It would convert your string to number but it won't print its original value to console.log. It will print as NaN "Not a Number".

// If you convert the value Null to number so what would it print it will print as 0.
1
let newPassword = Number(userPassword)

console.log(typeof(newPassword))

console.log(newPassword)

// If you convert a boolean to number so what will it print to console if you the value of boolean is "True" it will print 1 and if the Value of Boolean is "False" it will print 0.

let newA = Number(a);

console.log(typeof(newA))

console.log(newA);

//Always remember if you convert only "32" to number so it can easily print number to console while the value is "32abc" it won't print it will print as NaN.

//Same as we can also convert a number to string.

let userNage = String(userAge);

console.log(typeof(userNage))

console.log(userNage)
