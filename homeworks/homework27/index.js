const CITY_LIST = ['LVIV','DNIPRO','LONDON','BERLIN','KAIRO','MEXICO','MOSCOWW']

const CLASS_WEATHER = 'weather'
const CLASS_WEATHER_ITEM = 'weather-item'

function renderCityList () {
    let cityList = document.getElementById('city')
    for (let item of CITY_LIST){
        cityList.options[cityList.options.length] = new Option(item,item)
    }
}
renderCityList ()

let cityList = document.getElementById('city')
cityList.addEventListener('change', (event) => {
    const CITY_VALUE = event.target.value
    if(CITY_VALUE.trim() != '') {
        XHRequest (CITY_VALUE)
    } else {
        let infoBlock = document.querySelector(`.${CLASS_WEATHER}`)
        infoBlock.innerHTML = ''
    }
})

function XHRequest (city) {
    const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
    const UNITS = 'units=metric'
    const APPID = 'APPID=5d066958a60d315387d9492393935c19'
    
    let xhr = new XMLHttpRequest()

    let infoArr =[]

    xhr.open('GET',`${BASE_URL}?q=${city}&${UNITS}&${APPID}`)
    xhr.responseType = 'json'
    xhr.send()

    xhr.onload = function(){
        if(xhr.status != 200){
            let infoBlock = document.querySelector(`.${CLASS_WEATHER}`)
            infoBlock.innerHTML = `Ошибка ${xhr.status}, ${xhr.statusText}`
            console.log(`Ошибка ${xhr.status}, ${xhr.statusText}`)

        } else {
            let res = xhr.response
            infoArr = [
                res.name,
                res.main.temp,
                res.main.pressure,
                res.weather[0].description,
                res.main.humidity,
                res.wind.speed,
                res.wind.deg,
                res.weather[0].icon
            ]

            renderWeather(infoArr)
        }
    }
}

function renderWeather (info) {
    const titleInfo = ['Город:','Температура, C:','Давление, mm:','Описание:','Влажность, %:','Скорость ветра, m/s:','Направление, град.:','']
    const BASE_ICON_URL = 'http://openweathermap.org/img/w/'

    let counter = Counter()

    let infoBlock = document.querySelector(`.${CLASS_WEATHER}`)
    infoBlock.innerHTML = ''

    for (let item of titleInfo){
        let li = document.createElement('LI')
        li.classList.add(CLASS_WEATHER_ITEM)
        if (titleInfo.indexOf(item) == titleInfo.length-1){
            let icon = document.createElement('IMG')
            icon.setAttribute('src',`${BASE_ICON_URL}${info[counter()]}.png`)
            li.appendChild(icon)
        } else {
            li.innerText = `${item} ${info[counter()]}`
        }
        infoBlock.appendChild(li)
    }
}

let Counter = function(){
    let i = 0
    return function(){
        return i++
    }
}