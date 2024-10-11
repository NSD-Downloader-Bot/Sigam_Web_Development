console.log("I am in Loop Toturial")

let a=1;

for (let i = 0; i < 100; i++) {
    console.log(a+i)
    
}

let obj={
    name:"Harry",
    role:"Programmar",
    company:"NSD"
}

for (const key in obj) {
    const element =obj[key]
    console.log(key,element)

}

for (const c of "Harry") {
    console.log(c)
    
}


let i=0

// while (i<101){
//     console.log(i,"Dog is a  best policy")
//     i++
// }

do {
    console.log(i)
    i++;
} while (i<6); 