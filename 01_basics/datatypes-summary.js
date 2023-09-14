// primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); 

//Reference (Non primitive)
// Array, Objects, functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "sandeep",
    age: 25
}

const myFunction = function (){
    console.log("Hello World");
}

// To find the data type
console.log(typeof id);