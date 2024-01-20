const coding = ["js",'rb','py','java','cpp']

// coding.forEach((function (val){
//     console.log(val)
// }))

coding.forEach(( (item,index,array)=>{
    console.log(item,index,array)
}))

// coding.forEach(printme)

// function printme(val){
//     console.log(val)
// }

const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    },
    {
        languageName:"pyton",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
    
]

myCoding.forEach(item=>{
    console.log(item.languageName)
})