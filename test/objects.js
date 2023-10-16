//In this section of object we will talk about
//Objects in js
//Singleton objects are those which are declared by constructor written as Object.create
//and those objects which are not declared by constructor are called object literals.
const mySym = Symbol(123)
const obj = {
    name : "abc",
    car : "Lexus",
    model : "ES300h",
    [mySym] : "ABC"
}
console.log(obj)
//If you want to access a value of object so how will you.
//There are two methods of accessing values of objects.
console.log(obj.name)
console.log(obj["car"])
//Here we can also change our objects value which is name
obj.name = "XYZ"
console.log(obj)
//We can also add symbol to our object and and we can also array to an object.
console.log(obj[mySym])
//arrays in objects
let obj3 = {
    email : "abc@gmail.com",
    StId : 212,
    grade : ["class",12,"section","A"]
}
console.log(obj3)
//You can also add functions to objects.
obj.greetings = function play(userName,userAnswer){
    console.log(userName)
    if(userName === userAnswer){
        console.log("You are right")
    }else{
        console.log("Nice!")
    }
}
play = [{
    userName : "May i have your name please?"
},{
    userAnswer : "ABC"
}]
console.log(obj.greetings())
//Here i am little confused about this equation because i havent worked on
//functions for a long.
//You can also use bactiks to your code.
obj.greetings3 = `You are an object now, ${this.name}`
console.log(obj.greetings3)
//Here we use this to access the value of objects to write in backtiks.
