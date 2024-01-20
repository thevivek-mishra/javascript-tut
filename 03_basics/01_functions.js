

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

 function userLoggedIn(username){
    if(!username){
        console.log("please enter user name")
        return
    }

    return `${username} just logged in` 
 }

 console.log(userLoggedIn("vivek"))

 function calculatePrice(...num){
    return num
 }

 console.log(calculatePrice(200,300,300))

 const user ={
    username:"vivek mishra",
    price:200
 }

 function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`)
 }

//  handleObject(user)

handleObject({
    username:"vivek mishra",
    price:200
 })

 const newArr =[244,34,5,5,6]

 function handleArr (anyArr){
    return anyArr[1]
 }

// handleArr(newArr)

handleArr([244,34,5,5,6])
















