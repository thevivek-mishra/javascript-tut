const buttons =document.querySelectorAll(".button")
// console.log(buttons)
const body = document.querySelector("body")
// console.log(body)

buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        // console.log(e)
        // console.log(e.target.id)
        switch(e.target.id){
            case 'grey': body.style.backgroundColor =e.target.id;
               break;
            case 'white': body.style.backgroundColor =e.target.id
               break;
            case 'blue': body.style.backgroundColor =e.target.id
               break;
            case 'yellow': body.style.backgroundColor =e.target.id
               break; 
            default : body.backgroundColor ="white"         
        }
        

    })
})