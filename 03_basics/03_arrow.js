const user ={
    username:"remesh",
    price:999,
    welcomeMessage:function (){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username ="vivek"

user.welcomeMessage()
console.log(this)

// in browser this refer to window object and in node this refer to {} object

// function fn(){
//     let username ="vivek"
//     console.log(this.username) // undefined ...because use can not use this like this in fn
// }
// const fn =function(){
//     let username ="vivek"
//     console.log(this.username) //undefined
// }
// fn()

const fn =()=>{
    let username ="vivek"
    console.log(this.username) //undefined
}

const addTwo =(num1,num2)=> num1+num2 //or (num1 +num2 ) implict return
const addTwo2 =(num2,num2)=>{return num1+num2}

const obj =()=>{name:"vivek"}  //does't work 

const obj2 =()=>({name:"vivek"})