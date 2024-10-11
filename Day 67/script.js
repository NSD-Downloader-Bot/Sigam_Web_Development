console.log("Hellow World")
document.body
<body>​<div class=​"container">​<div class=​"box1 box">​box1​</div>​<div class=​"box2 box">​box2​</div>​<div class=​"box3 box">​box3​</div>​<div class=​"box4 box">​box4​</div>​<div class=​"box5 box">​box5​</div>​</div>​</body>​
document.body.childNodes
NodeList(3) [text, div.container, text]
document.body.childnodes[0]
VM391:1 Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at <anonymous>:1:25
(anonymous) @ VM391:1
document.body.childNodes[0]
#text
document.body.childNodes[1]
<div class=​"container">​…​</div>​
document.body.childNodes[1].childNodes
NodeList(11) [text, div.box1.box, text, div.box2.box, text, div.box3.box, text, div.box4.box, text, div.box5.box, text]
const.firstelemntchile
VM709:1 Uncaught SyntaxError: Unexpected token '.'
let cont =document.body.childNodes[1]
undefined
cont.firstElementChild
<div class=​"box1 box">​box1​</div>​
cont.lastElementChild
<div class=​"box5 box">​box5​</div>​
cont.lastElementChild.sty
undefined
cont.lastElementChild.style.backgroundColor="red"
'red'
cont.lastElementChild.parentElement
<div class=​"container">​…​</div>​