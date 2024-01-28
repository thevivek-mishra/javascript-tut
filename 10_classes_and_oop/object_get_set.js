const User ={
    _email:"vivek@gmail.com",
    _passward:"vivek#122",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
//factory function 
const tea = Object.create(User)

console.log(tea.email)