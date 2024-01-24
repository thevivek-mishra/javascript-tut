const randomColor =function(){
    const hex ="0123456789ABCDEF"
    let color ='#'
    for (let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
const startChangingColor =()=>{
    
    const changBgColor=()=>{
        document.body.style.backgroundColor = randomColor()
    }
    if(!intervalId){
        intervalId = setInterval(changBgColor,2000)
    }
    
    
}
const stopChangingColor =()=>{
    clearInterval(intervalId)
    console.log("stop is clicked")
    intervalId = null;
}
document.getElementById('start').addEventListener('click',startChangingColor)
document.getElementById('stop').addEventListener('click',stopChangingColor)
