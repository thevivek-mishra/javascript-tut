const user ={
    username: "hitesh",
    loginCount:8,
    signedIN:true,
    getUserDetails:function(){
        console.log('got user details')
        console.log(this.username)
        console.log(this)
    }
}

// console.log(user.username)

// console.log(user.getUserDetails())

// const promiseOne = new Promise()
// const date = new Date()

function User (username,loginCount, isLoggedIn){
    this.username =username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this
}

// const userOne = User("vivek", 12,true)
// console.log(userOne)
// const userTwo = User ("Mahesh",9,false) // override this value 

const userOne = new  User("vivek", 12,true)
console.log(userOne)
const userTwo = new User ("Mahesh",9,false) // does not override

console.log(userOne.consturtor)