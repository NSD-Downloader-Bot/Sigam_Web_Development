fault=Math.random()
console.log(fault)

let a=prompt("Enter the first number")
let operation=prompt("Enter the operation")
let b=prompt("Enter the second number")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (fault>0.1) {
    alert(`The result is ${eval(`${a} ${operation} ${b}`)}`)
}

else{
    operation=obj[operation]
    alert(`The result is ${eval(`${a} ${operation} ${b}`)}`)

}