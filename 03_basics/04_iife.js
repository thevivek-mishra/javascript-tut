//immediately Invoked funtions expressions (iife)

(function fn(){
    console.log("db connected")
})();

//to end the exection we have to use ; because iife doest not know where to end the execution

((name)=>{
    console.log(`db connected ${name}`)
})("vivek")