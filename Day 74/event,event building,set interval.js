let button = document.getElementById("btn")
let body = document.body
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click",()=>{
    // alert("Dog is a best policy")
    document.querySelector('.box').innerHTML = "Dog can bark and my dog name is tiger"
})

button.addEventListener('dblclick',()=>{
    document.querySelector('.box').innerHTML = "Dabhele is a best policy"
})

body.addEventListener('contextmenu',()=>{
    alert("Don't hack us bu clicking right click")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)})