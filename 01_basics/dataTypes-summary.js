// Primitive 
// 7 types : string, Number, Boolean, null, undefined, Symbol,BigInt

// reference (non primitive)
// Array, Objects, Functions

// Symbol

const id = Symbol('123')

const anotherId =Symbol('123')

console.log(id === anotherId)

// bitInt 

const bigNumber = 33345343n;

// array 

const heros =["shaktiman","naagra","doga"]

// object

let myObj ={
    name:"vivek",
    age: 23,

}
// function

const myFunction =function(){
    console.log("Hellow world");
}

console.log(typeof myFunction) // function

// stack (primitive), Heap(Non Primitive)
let myYoutubename ="moviemasti"
let anothename =myYoutubename;
anothename = "justchill"

console.log(anothename)
console.log(myYoutubename)

let userOne ={
    email: "user@gmail.com",
    upi:"user@ybl"

}

let userTwo =userOne;

userTwo.email ="vivek@gmail.com"

console.log(userTwo.email) //vivek@gmail.com
console.log(userOne.email) //vivek@gmail.com

// wheneve we change the non primitive data types value we change the actual value in heap memory
// whenever we change the value of primitive data types we change the copy of that in stack memory




