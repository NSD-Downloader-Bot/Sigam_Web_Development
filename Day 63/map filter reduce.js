let a=[1,13,5,7,11]
let newa=[]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newa.push(element**2)
// }

// console.log(newa)

let newarr= a.map((e,index)=>{
    return e**2
})

console.log(newarr)

const greaterthanseven=(e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(a.filter(greaterthanseven))


let a2=[1,2,3,4,5,6,7]


const red =(a,b)=>{
    return a*b
}

console.log(a2.reduce(red))

console.log(Array.from("harry"))