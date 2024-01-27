class User{
    constructor(username,){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static creteId(){  // static method can not be accessed
        return `123`
    }
}

const vivek = new User("vivek")
console.log(vivek.logMe())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")

console.log(iphone.creteId())

