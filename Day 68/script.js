// console.log("Hellow World")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[1].style.backgroundColor = "red"

// document.getElementById("black").style.backgroundColor = "black"

// document.querySelector(".box").style.backgroundColor='green';
let a=document.querySelectorAll(".box")

a.forEach(element => {
    element.style.backgroundColor="red"
});

