//Here we will talk about arrays in detail.
//We previously discussed arrays but here we will go in depth of it.
let myArr5 = [1,2,4,4,5]
console.log(myArr5[1])
let myArr6 = [1,3,4,5,6]
//How to add arrays together and print it to an array.
//Using concat() to add two arrays together.
myArr7 = myArr5.concat(myArr6)
console.log(myArr7)
//Flat(infinity) it is used to print value of array neatly.
//for instance we declare multiple arrays in an array and we want to print those all in an array but neatly.
// const myarr = [1,2,3["abc"],22,2,2,2[22]]
// console.log(myarr.flat(Infinity))
//Join() it is used to convert an array to a string.
myArr = myArr7.join();
console.log(myArr)
//and if want to know the value exists in array so how would we do that?
//Using .isArray()
console.log(Array.isArray("Hassan"))
//if it exists in arrays so it will print true if not then it will print false.
//and if you have declared numbers and want to print in arrays.
//ofArray()
let num2 = 90;
let num5 = -90;
let num7 = 23;
console.log(Array.of(num2, num5 , num7))