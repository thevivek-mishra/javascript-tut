//ES6 
class User {

    //jaise hi  class se ek object initalize hota constructor aapneaap call ho jata hai
    constructor(username,email,passward){
        this.username =username;
        this.email = email;
        this.passward = passward;
    }

    encryptPassward(){
         return `${this.passward}abc`
    }
    changeUserName(){
        return this.username.toUpperCase()
    }
}

const userOne = new User("chai","chai@gmail.com",123)

console.log(userOne.encryptPassward())
console.log(userOne.changeUserName());

//behind the scene

// function User(username,email,passward){
//     this.username = username;
//     this.email = email;
//     this.passward = passward
// }

// User.prototype.encryptPassward = function(){
//     return `${this.passward}abc`
// }

// User.prototype.changeUserName = function(){
//     return this.username.toUpperCase()
// }
 
// const userOne = new User("vivek" ,"chai@gmail.com",123)

// console.log(userOne.encryptPassward())
// console.log(userOne.changeUserName());