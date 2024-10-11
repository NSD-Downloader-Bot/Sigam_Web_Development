let box = document.querySelectorAll(".box")

let bg =['Black','white','red','green','aqua']
let colour=['white','black','green','red','yellow']

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


i=4
for (let index = 0; index < box.length; index++) {
    const element = box[index];

    const randomNumber = getRandomNumber(0, i);

    element.style.backgroundColor=bg[randomNumber]
    element.style.color=colour[randomNumber]

    bg.splice(randomNumber,1)
    colour.splice(randomNumber,1)
    // console.log(bg)
    // console.log(colour)
    i=i-1
}

// harry solution

// console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children 


// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })