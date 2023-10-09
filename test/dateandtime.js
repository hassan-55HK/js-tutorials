//Here we will learn to check the time and date.
//and we will also convert time to multiple Maths Objects.js.
//And here we will customize our time and date accordingly.
//Date is also an object in JS.

let myDate = new Date();
console.log(myDate)
console.log(myDate.toString())//We use .toString() to see neatly time and date in console.
console.log(myDate.toLocaleDateString())//It prints the date and as Month Day Year as 10/06/2023.
console.log(myDate.toLocaleString())//toLocaleString() prints the exact time and date .
console.log(myDate.toDateString())//It prints the date exactly as Fri oct 06 2023.

console.log(Date.now()/1000)//It will print the seconds
//And if you want it to print the milliseconds so dont divide it by 1000
console.log(Date.now())
let timeNow = (Math.round(Date.now()/1000));
console.log(timeNow)