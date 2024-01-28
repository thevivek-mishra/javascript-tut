function User(email,passward){
    this._emailemail = email;
    this._passward = passward;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(vlaue){
            this._email = vlaue
        }
    })
    Object.defineProperty(this,'passward',{
        get:function(){
            return this._passward.toUpperCase()
        },
        set:function(vlaue){
            this._passward = vlaue
        }
    })


}

const vivek = new User("vivek@gmail.com","vivke@12e32")

console.log(vivek.passward)