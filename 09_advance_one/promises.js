const promiseOne =new Promise(function(resolve,reject){
    // do async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log("async task complete")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promised consumed')
})

new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    })
}).then(function(){
    console.log("async task is complete")
}) 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usrnam:"vivek",email:"vivek@gmail.com"})
    },1000)
})

promiseThree.then(function(data){
    console.log(data)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true
        if(!error){
            resolve({username:"vivek",email:"vivek@gmail.com"})
        }else {
            reject("Error something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(error=>{
    console.log(error)
}).finally(()=>{
    console.log("the promise is either reject or resolve")
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true
        if(!error){
            resolve({username:"vivek",email:"vivek@gmail.com"})
        }else {
            reject("Error something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    // do no write promiseFive() because promiseFive is a object
    console.log(response)
    } catch (error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const resonse = await fetch('https://api.github.com/users/thevivek-mishra')
//         const data = resonse.json()
//         console.log(data);
//     } catch (error) {
//         console.log("error",error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/thevivek-mishra')
.then(response=>{
    return response.json
})
.then(data=>{
    console.log(data)
})
.catch(
    error=>{
        console.log(error);
    }
)
.finally()