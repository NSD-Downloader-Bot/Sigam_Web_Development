// let number=prompt("Enter the number")

function factorial(number){
    if (number==1) {
        return 1
    }

    else if(number==0){
        return 0
    }

    else{ return number*factorial(number-1)}
}

console.log(factorial(99))



// Harry solution 

let a = 7

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))