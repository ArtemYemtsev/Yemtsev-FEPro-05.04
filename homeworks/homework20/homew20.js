function createInput(){
    let input = document.createElement('input')
    input.setAttribute('placeholder','Enter route link')
    input.setAttribute('value','')
    input.style.display = 'block'
    document.body.append(input)
}

function createButton(title){
    let btn = document.createElement('button')
    btn.innerHTML = title
    btn.setAttribute('id',title)
    btn.style.width = '85px'
    btn.style.padding = '10px'
    document.body.append(btn)
}

function checkUrl(protocol){
    function getUrl(){
        let url = document.querySelector('input')
        if (url.value === null || url.value.trim() === "" || Number.isInteger(+url.value) || isValidUrl(url.value) === false){
            alert('Link is incorect')
        } else return url.value
    }
    
    function isValidUrl(url){
        let link = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        return link.test(url);
    }

    
    let urlArr = getUrl().split("")
    const Http = ['h','t','t','p',':']
    const Https = ['h','t','t','p','s']
    let textArr = []

    for (let i = 0; i < 5; i++){
        textArr.push(urlArr[i])
    }

    for (let i = 0; i < textArr.length; i++){
        if (Http[i] === textArr[i] || Https[i] === textArr[i]){
            continue
        } else if(protocol === 'http'){
            urlArr.unshift('h','t','t','p',':','/','/')
            break
        } else if(protocol === 'https'){
            urlArr.unshift('h','t','t','p','s',':','/','/')
            break
        }
    }

    return urlArr.join('')
}

createInput()
createButton('http')
createButton('https')

document.getElementById('http').addEventListener('click',
    () =>{
        console.log(checkUrl('http'))
        window.location.href = checkUrl('http')
    })

document.getElementById('https').addEventListener('click',
    () =>{
        window.location.href = checkUrl('https')
    })