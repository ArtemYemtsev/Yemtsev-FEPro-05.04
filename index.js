let img = document.createElement('img')

let rand = Math.ceil(Math.random() * 9)
img.setAttribute('src',`images/${rand}.jpg`)

document.body.append(img)





