const myNums =[1,2,3]

const myTotal =myNums.reduce((acc,currVal)=>{
    console.log(`acc ${acc} and currval:${currVal}`)
    return acc+currVal
},0)

const shoppingCart =[
    {
        itemName:"Js course",
        price:299,
    },
    {
        itemName:"Js course",
        price:299,
    },
    {
        itemName:"mobile course",
        price:2995,
    },
    {
        itemName:"html course",
        price:29998,
    },
    
]
const sum = shoppingCart.reduce(item=>{
    return acc+item.price
},0)