const userEmail =[]

if(userEmail){
    console.log("true condition")
}else{
    console.log("false condition")
}


// falsy values 
// false , 0, -0, bigInt 0n, "", undefined, NaN

// truthy values 

// "0" , "false", " ", [], {}, function(){}

// Nullish Coalescing Operator (??) : null undefined

let val;
// val = 5 ?? 10;  // 5
// val = null ?? 10;   // 10
// val = undefined ?? 10;   // 10
// val = null ?? 10 ?? 15;   // 10

// ternary Operator
// condition ? true : false 

const iceTeaPrice =100;
iceTeaPrice <=80 ?console.log("less than 80"):console.log("more than 80")
