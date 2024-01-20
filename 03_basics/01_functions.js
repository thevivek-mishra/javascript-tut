

function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");
}
// sayMyName()

function addTwoNumbers(num1,num2){ // function definiton >parameter
    console.log(num1+num2)
}
const result =addTwoNumbers(2,5) // argument

console.log(result) // undefined because above funtion doesn't return anything

function addTwoNumbers2(num1,num2){ // function definiton >parameter
    return num1+num2
}

 const result2 =addTwoNumbers2(3,4);

 console.log(result2) //7

 const userLoggedIn (username="other name"){
    if(!username){
        console.log("please enter user name")
        return
    }

    return `${username} just logged in` 
 }

 console.log(userLoggedIn("vivek"))



















