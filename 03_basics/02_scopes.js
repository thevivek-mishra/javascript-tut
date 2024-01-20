let a= 5;

{
    let a= 10
    const b =20;
    console.log(a)
}
const arr =[2,3,4]
for(let i=0;i<arr.length;i++){
    const element =arr[i]
}

console.log(add(5)) // can be hoisted

function add (num){
    return num+1
}

console.log(add(5)) // can not be hoisted
const add2 =function(num){
    return num+1
}