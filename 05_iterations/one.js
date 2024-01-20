// for loop 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (let i = 1; i < 10; i++) {
    console.log(`outer loop values ${i}`)
    for (let j = 0; j < 6; j++) {
        // console.log(`inner loop values ${j} and inner loop values ${i}`)
        console.log(i + "*" + j +"="+i*j) //table 1 to 10
        
    }
    
}
let myArray =["flash", "batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}

//break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`)
        break
    }
    console.log(`value of i is ${i}`)
    
}
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`)
        continue
    }
    console.log(`value of i is ${i}`)
    
}