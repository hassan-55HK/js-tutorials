//Here we will talk about Number and maths in JS
//Numbers
const userId = 223;
console.log(userId)
const updatedUserId = new Number(userId)//Here we used an Js object which determines the Number in object
console.log(typeof updatedUserId)
//toString : it is used to convert a number to a string
console.log(updatedUserId.toString().length)

//toFixed : it is used to add digits to number in jS
console.log(userId.toFixed(2))//The more value we put the more digits it will add to the value as Zero.
//toPrecision : it is used in those values who have digits and works as print the precise value.

const anotherUserId = 222.3333;

console.log(anotherUserId.toPrecision(2))
console.log(anotherUserId.toPrecision(3))

//toLocalString : it is used to convert a disordered range of numbers which is confused to read
//a little thats why we use toLocalString('en-IN') to print neatly.

const num = 1000000;
console.log(num.toLocaleString('en-IN'))

///////-------------------Maths---------------------/////
//Always remember we have Maths in JS by default.
console.log(Math)//It is an object in JS

//Math.abs(): It is used to print the opposite values of given value.
console.log(Math.abs(-4));//And it only works for negative values it is not that it can work same for positive values.

console.log(Math.abs(5))//Look it didnt convert positive 5 to negative 5 because it only converts negative values.

//Round: It is used to round off between two objects.
console.log(Math.round(2.6))

//Ceil: It is used to print the Upper value between two objects.
console.log(Math.ceil(2.7))

//Floor: It is used to print the bottom value between two objects.
console.log(Math.floor(3.6))

//Min: It is used to print the lowest value among objects.
console.log(Math.min(0,2,3,4,5,6))

//Max: It is used to print the highest value among objects.
console.log(Math.max(0,2,3,4,5,6))
//Max is mostly used in random values in js.
//What is Random Value in JS? It is which gives you the value between 0 and 1.
console.log(Math.random())
//If we have 2 values and we want to find the random number in both of them.
const num1 = 90;
const num2 = 900;
console.log(Math.random()*(num2 - num1 + 1))
//If we dont our random value 0 so we will add num2 which will give some digit values
console.log(Math.random()*(num2 - num1 + 1)+ num2)
//And if we want it to print the lowest value of it so we will use floor in Math
//Or whatever object we can easily use them here.
console.log(Math.floor(Math.random()*(num2 - num1 + 1)+ num2))
let num3 = (Math.floor(Math.random()*(num2 - num1 + 1)+ num2));