class User {
    constructor(email,passward){
        this.email = email;
        this.passward = passward
    }
    get email (){
        return `${this._email}vivek`
    }
    set email (value){
        this._email = value
    }
    get passward (){
        return `${this._passward.toUpperCase()}@1233`
    }
    set passward (value){
        this._passward= value
    }

}

const vivek = new User("vivek@gmail.com","123")
console.log(vivek.passward)
console.log(vivek.email);