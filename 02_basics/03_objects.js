// singleton
//  Object.create()

// Object literals

const mySym =Symbol("key1")

const jsUser={
    name:"viek", //by default "name":"vivek"
    "full name":"vivek kumar mishra",
    age:18,
    location:"Noida",
    email:"vivek@gmail.com",
    [mySym]:"mykey1",
    isLoggedIn:false,
    lastLoginDays: ["Monday","saturday"]

}

console.log(jsUser.name)
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email="mishra@gmail.com"

// Object.freeze() // this is used to freeze the object after that we can not change anything in object

jsUser.greeting =function (){
    console.log("hellow js user")
}


jsUser.greetingTwo =function(){
    console.log(`hellow js user, ${this.name}`)
}


