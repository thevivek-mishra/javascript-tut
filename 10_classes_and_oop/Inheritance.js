class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username,email, passward){
        super(username)
        this.email = email;
        this.passward = passward;
    }
    addCourse(){
        console.log(`A new code was added by ${this.username}`)
    }
}

const teacherOne =new Teacher("vivek","vivek@gmail.com","Vivek@123")

teacherOne.addCourse()

const teacherTwo = new Teacher("Mahesh","mahes@gmail.com","mahesh@123")

teacherOne.logMe()
teacherTwo.logMe()

console.log(teacherOne === teacherTwo)

console.log(teacherOne instanceof User)