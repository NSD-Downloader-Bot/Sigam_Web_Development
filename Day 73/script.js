function create_card(imgsrc,title,ch,veiws,months){

    if(veiws >=1000000){
        veiws =`${veiws/1000000}M`
    }

    else if (veiws >=1000){
        veiws=`${veiws/1000}k`
    }



    console.log("Running")
    let div = document.createElement("div")
    div.setAttribute("class","card")
    document.querySelector(".container").append(div)

    let div2 = document.createElement("div")
    // div2.setAttribute("class",'imgdiv')
    document.querySelector('.container').lastChild.append(div2)

    let div3 = document.createElement("div")
    // div3.setAttribute("class",'titlediv')
    document.querySelector('.container').lastChild.append(div3)

    let img = document.createElement("img")
    img.setAttribute('src',imgsrc)
    document.querySelector(".container").lastChild.firstChild.append(img)

    let h3 = document.createElement("h3")
    h3.innerText = title
    document.querySelector('.container').lastChild.lastChild.append(h3)

    let div4 = document.createElement('div')
    div4.setAttribute('class','viws chanelname')
    document.querySelector('.container').lastChild.lastChild.append(div4)

    let chname = document.createElement('h6')
    chname.innerText=ch
    document.querySelector('.container').lastChild.lastChild.lastChild.append(chname)

    let veiwsh6 = document.createElement('h6')
    veiwsh6.innerHTML = `•  &nbsp; ${veiws}`;
    
    let ago = document.createElement("h6")
    ago.innerHTML =  `•  &nbsp; ${months}`

    document.querySelector('.container').lastChild.lastChild.lastChild.append(veiwsh6,ago)
    
}

create_card("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","Installing VS Code &; How Websites Work | Sigma Web Development Course - Tutorial #1",'CodeWithDevansh','100M','1 Day Ago')

let img ='https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw'

create_card(img,"Dog is a best policy || My dog is Tiger || Tiger can bark and can dog many things || Dabhle  is a best policy .",'TigerSingh','100000000',"1 hour ago")

create_card(img,"Dabhele is a best policy harry can bark || dog name is tiger singh and tiger can run","Dog and the family","199999","5 Months ago")