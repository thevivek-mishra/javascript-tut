// dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)

// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp.getTime())
// console.log(Date.now()/1000) 

let newDate = new Date()

console.log(newDate.getDay())

newDate.toLocaleDateString('defalt',{
    weekday:"long"
})