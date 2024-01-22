const form = document.querySelector('form')
//this usecase will give you empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    console.log(height)
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight)
    const result = document.querySelector("#results")
    console.log(result)
    result.innerHTML ="this is answer"

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML ='please enter a valid height'
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML ='please enter a valid weight'
    }else {
      const bmi =  (weight/((height*height)/10000)).toFixed(2)
      // show the result 
      result.innerHTML = `<span>${bmi}</span>`
    }

    // suggestion according to bmi
})