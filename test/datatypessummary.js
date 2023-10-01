/*As we learned previously that we have types of data types
Primaitive datatypes and Reference datatype.
Primitive datatypes which contains followings as: "String", "Number", "Boolean", "Symbol", "Undefined", "Null", "Bigpint"
*/
const str = "Hi how are you?";
let id = 12345;
const studentId = true;
let idet = Symbol("123");
const studenName = undefined;
const studentPassword = null;
const studentContact = 123456789n; //While n represents the statement as Bigint

console.log(str)
console.log(studentId)
console.log(idet)
console.log(typeof idet)
console.log(studenName)
console.log(studentPassword)
console.log(studentContact)

//Reference Datatype which contains followings as: "Array", "Objects", "Functions"

let arr = [str, "my friend", "What do you do?"]
console.log(arr)

let carCollection = {
    car1 : "Civic 2019",
    car2 : "Corolla 2021",
    car3 : "Nissan Petrol 2017"
}
console.log(carCollection)

function play(){
    console.log("You are good")
}