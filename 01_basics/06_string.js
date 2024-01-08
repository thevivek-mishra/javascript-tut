const name  = "vivek"
const repoCount =50;

// console.log(name + repoCount +"value"); 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Vivelhc")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf("t"))

const myString =gameName.substring(0,4)

console.log(myString)

const anotherString =gameName.slice(-8,4)

console.log(anotherString)

const newStringOne = " Hitesh "

console.log(newStringOne)
console.log(newStringOne.trim)

const url ="http://vivek.com/vivek%20mishra"

console.log(url.replace('%20',''))

console.log(url.includes('hitesh'))








