 {let score ="2323"

 console.log(typeof score); //string

 let valueInNumber =Number(score)

 console.log(typeof valueInNumber) // number
 console.log(valueInNumber) // 2323
}
{let score ="2323abc"

 console.log(typeof score); //string

 let valueInNumber =Number(score)

 console.log(typeof valueInNumber) // number
 console.log(valueInNumber) // NaN 
// whenever we covert string value in number and value is not a number so it convert type date sting to number and value NaN

}

{let score =null

 console.log(typeof score); //object

 let valueInNumber =Number(score)

 console.log(typeof valueInNumber) // number
 console.log(valueInNumber) // null
}

{let score =undefined

 console.log(typeof score); // undefined

 let valueInNumber =Number(score)

 console.log(typeof valueInNumber) // number
 console.log(valueInNumber) // NaN
}
{let score = true

    console.log(typeof score); // boolean
   
    let valueInNumber =Number(score)
   
    console.log(typeof valueInNumber) // number
    console.log(valueInNumber) // for true value is 1 and for false value is 0
   }

   //"33" => 33
   // "33abc" =>NaN
   // true =>1; false =>0

  {
    let isLoggedIn = 1;
    let booleanIsLoggedIn =Boolean(isLoggedIn)
    console.log(booleanIsLoggedIn) // true
  }
  {
    let isLoggedIn ="" ;
    let booleanIsLoggedIn =Boolean(isLoggedIn)
    console.log(booleanIsLoggedIn) //false
  }
  {
    let isLoggedIn ="vivek" ;
    let booleanIsLoggedIn =Boolean(isLoggedIn)
    console.log(booleanIsLoggedIn) //true
  }

{

    let someNumber =33
    let stringNumber =String(someNumber)
    console.log(typeof stringNumber)
    console.log(stringNumber) // "33" 

}
// ****************Operations **************************
let value =3
let negValue = -value
console.log(negValue) // -3

let str1 ="hellow"
let str2 =" Vivek"
let str3 = str1 + str2;
console.log(str3)

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 +2) // 122
console.log(2 +2 + "1") // 41

console.log(true) // true
console.log(+true) // 1
//console.log(true-) // SyntaxError :unexpected token 
console.log(+"") // 0
