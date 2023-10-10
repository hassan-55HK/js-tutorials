//Here we will talk about arrays in JS
const myArr = [1,3,4,5,"Hassan"]//We can also add string to an array.
console.log(myArr)
//Printing a value from of array.
console.log(myArr[1])//It will print the 2nd value of array because
//As we know that 0 is considered 1 in JS.
//Push() it is used to add an element to an array in JS.
myArr.push(2);//While it will add at last.
console.log(myArr)
//Pop() it is used to remove an element from array whatever exists at last.
//it will remove each last element from array.
myArr.pop()
console.log(myArr)
myArr.pop()
console.log(myArr)
//unshift() it is used to add an element to an array using unshift() at first.
myArr.unshift(11)
console.log(myArr)
//shift() it is used to remove an element from array whatever comes first.
myArr.shift()
console.log(myArr)
//Slice() it is used to print the value from 1 to 3 it but it will print 2 value of array.
//We can also print a string along with array.
console.log("B", myArr)
let myArr1 = myArr.slice(1, 3)
console.log(myArr1)
let myArr2 = myArr.splice(1,3)//Splice it is used to print the values from 1 to 3 it will three values of array.
console.log(myArr2)
