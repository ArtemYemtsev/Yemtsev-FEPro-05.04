let img = document.createElement('img')
let random = () => {
    return Math.ceil(Math.random() * 9)
}

img.src = `images/${random()}.jpg`
document.body.append(img)

setInterval(()=>{
    img.setAttribute('src',`images/${random()}.jpg`)
    }
    ,5000)



