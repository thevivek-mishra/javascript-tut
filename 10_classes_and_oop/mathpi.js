const descripter = Object.getOwnPropertyDescriptor(Math,"pi")

console.log(descripter);
console.log(Math.pi);

const chai ={
    name:"ginder chai",
    price:"123",
    isAvailable:true,
    orderChai:function(){
        console.log("chai nhi bani")
    }
}

Object.defineProperty(chai,"name",{
   writable:false,
   enumerable:false, 
})

// for(let [key,value] of chai){
//     console.log(`${key}:${value}`)
// }


for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`)
    }
}