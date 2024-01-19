// const tinderUser = new Object()

const tinderUser ={}

tinderUser.id = "1123abc"
tinderUser.name ="sammy"

tinderUser.isLoggedIn =false

console.log(tinderUser)

const regularUser = {
    email:"soma@gmail.com",
    fullname:{
        userfullname:{
            firstName:"vivek",
            lastName:"Mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1,obj2}

// const obj3 ={obj1,obj2}

// const obj3 =Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1,...obj2, ...obj4}

const users =[
    {
        id:1,
        email:"vivek@gmail.com"
    },
    {
        id:2,
        email:"mishra@gmail.com"
    }
]

users[0].email;

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(tinderUser.value(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course ={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor:intructor} =course; 

// {
//     "name":"vivek",
//     "coursename":"js in hindi",
//     "price":"free"

// }