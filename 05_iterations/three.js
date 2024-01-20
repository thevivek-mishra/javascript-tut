//  for of 

// ["","",""] 

// [{},{},{}] 

const arr =[1,2,3,4,5,6]

for (const num of arr) {
    console.log(num)
}

const gretting = "Hellow world!"

for (const greet of gretting) {
    console.log(`Each char is ${greet}`)
}

// map

const map = new map()
map.set('IN',"India")
map.set("USA","United States of America")
map.set("Fr","Franch")
map.set("IN","India")

console.log(map)
// for(const key of map){
//     console.log(key)
// }


for(const [key,value] of map){
    console.log(key, ":-",value)
}

const myObject ={
    'game1':"NFS",
    'game2': "Spideman"
}

// for(const [key,value] of myObject){
//     console.log(key,":-",value)
// }
