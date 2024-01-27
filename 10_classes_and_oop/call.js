function SetUserName(username){
    //complex db calls
    this.username = username
}

function createUser(username, email, passward){
    // SetUserName(username)

    // SetUserName.call(username)

    SetUserName.call(this,username)
    this.email =email
    this.passward = passward
}

const chai = new createUser("chai",'chai@gmail.com',"chai123")
console.log(chai)