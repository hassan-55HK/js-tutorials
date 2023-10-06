//Here we will talk about strings in JS and also we will talk about multiple method of declaring strings in JS

const userName = "Abc";

let anotherUsername = " xyz";

// console.log('Hello my name is $ {userName}');

                //Using new object to write a string
let userId = new String('Abc1122');

console.log(userId);
console.log(typeof(userId)); // Here string is an object 
// Here we can access the element of our string.
console.log(userId[0]);
//How to access the list of prototype in js.
console.log(userId.__proto__);//Here it wont give the list of its objects the best way to use it in Browser.

//following the objects of Prototype.
console.log(userId.length);//It will let us know the length of a string.

console.log(userName.toUpperCase());

//Trim() It is used to aviod the space in string and print it.
//for instance we have a string which space on both sides and we want to print without space.

const userEmail = "       Hassan       ";

console.log(userEmail); //Here it will also print the space 

console.log(userEmail.trim());

//charAt is an object of prototype which print the value of a string by writting digits as

console.log(userName.charAt(2));

//Includes is used to ask the console to if the value exists to a string then let us know if yes
//if yes it will print true or not it will print false

console.log(userName.includes("Abc"));

//Slice is used to print the from where and to ? it means you will have to put 2 values First will be string point 
//and Second will be the Last but before we go in practice i will let you know for your kind information
//that it wont print the last value we will give it such as if we want to print from 2 to 3
//so we will declare as Slice(1,3) it means it will print the value 2 and 3 but not 4th one and you can reverse the 
//Value of a given string.

console.log(userName.slice(0,2));

//Substring is used also used same as Slice but here we cant reverse the value of a string.
console.log(userName.substring(0,2));

//Split is used to convert a string to an array.
console.log(userName.split(0,2));

console.log(userEmail.split('       '));

//Indexof is used to find value by asking its value to print it
console.log(userName.indexOf('c'));

//Replace is used to replace value of a string with a new one.

console.log(userEmail.replace("       ", "1122"));

//the modern way to concatenate a string to a variable is.
//console.log(`Hello world from ${userName})
//I have also wondered many times that what is ` ?? how to use it then searched for it and learned it 
//shift+` which gives us an output as (~) ` which comes before 1 or !.

console.log(`Hello world from ${userName}`);
