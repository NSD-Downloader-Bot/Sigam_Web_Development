let a = document.querySelector(".box").innerHTML
let b = document.querySelector(".box").innerText
let c = document.querySelector(".container").innerHTML
let d = document.querySelector(".container").innerText

let e = document.querySelector(".container").outerHTML
let f = document.querySelector(".container").tagName
let g = document.querySelector(".container").nodeName
let h = document.querySelector(".container").textContent
 

// document.querySelector(".container").hidden =true
document.querySelector(".box").innerHTML = "Dog is a best polciy"
document.querySelector(".box").innerHTML = "Dabhle is a best polciy"

let i = document.querySelector(".box").hasAttribute("style")
let j = document.querySelector(".box").getAttribute("style")
let k = document.querySelector(".box").setAttribute("style",'display : inline')
let l = document.querySelector(".box").attributes
document.querySelector(".box").removeAttribute("style")

document.designMode="on"  // Wonderful feature

let m = document.querySelector(".box").dataset

let div = document.createElement("div")
div.innerText = 'I am a dog'
div.innerHTML = 'I have been inserted <b>by devansh</b> '
div.setAttribute("class","created")
document.querySelector(".container").append(div)

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please h elp me here too much raining.... iuuuuooooo</b>")


let n = document.querySelector(".container").classList
let o = document.querySelector(".container").className
document.querySelector(".container").classList.add("Devansh")
document.querySelector(".container").classList.add("Dog")
document.querySelector(".container").classList.remove("Dog")
document.querySelector('.container').classList.toggle("Devansh")
document.querySelector('.container').classList.toggle("Devansh")//imp method 

console.log(a)
console.log(b)
console.log(c)
console.log(d)

console.log(e)
console.log(f)
console.log(g)
console.log(h)

console.log(i)
console.log(j)
console.log(k)
console.log(l)

console.log(m)

console.log(n)
console.log(o)