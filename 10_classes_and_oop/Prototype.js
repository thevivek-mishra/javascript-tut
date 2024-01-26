let myName ="Vivek"
let mySecondName= "Mishra    " 

Object.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

console.log(mySecondName.trueLength())

let myHeros =["thor",'spiderman']

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.vivek = function (){
    console.log(`vivek is present in every object`);
}

heroPower.vivek()
myHeros.vivek()

Array.prototype.hiVivek =function(){
    console.log("this is hi vivek fun of array")
}

// inheritance

const User = {
    name:"user",
    email:"email@gmail.com"


}
 
const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}
// outdated inheritance approach
const TASupport = {
    makeAssignment:'js assignment',
    fulltime: true,
    __proto__:TeachingSupport

}
// or we can write 

TASupport.__proto__ = TeachingSupport

// modern syntax 

Object.setPrototypeOf(TASupport,TeachingSupport)   // setPrototypeOf(jimse me assign karna hai , jo assign karna hai)
