"use strict" // this is to let know our brower to treat all js as newer version.

//There are Seven Primaray Data Types in JS. Let's explore each datatype below.

const userName = "Hassan"; //string

let userAge = 22; //Number

let a = true;

let b = false; //This is called boolean.

let userEmail; // This is an undefined variable.

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