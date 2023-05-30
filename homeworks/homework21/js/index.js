let offers = [
    {
        id: '001',
        category: 'cars',
        image: '001.webp',
        title: 'Экскаватор колёсный',
        description: 'Экскаватор из серии Lena Truxx. Подвижный ковш управляется с помощью ручки. Стальные оси и открывающаяся кабина. В комплекте фигурка рабочего.',
        price: '1080'
    },
    {
        id: '002',
        category: 'cars',
        image: 'ford01.webp',
        title: 'Автомодель Bburago Ford Shelby GT500',
        description: 'Игровая ценность модели в том, что она имеет высокий уровень детализации, что обеспечивает максимальное сходство с оригиналом.',
        price: '445'
    },
    {
        id: '003',
        category: 'cars',
        image: 'hw01.jpg',
        title: 'МАШИНА HOT WHEELS БАЗОВАЯ 10 ШТ',
        description: 'Набір Hot Wheels. Неймовірні гонки з швидкими машинками, віражі та небезпечні пастки на треках.',
        price: '799'
    },
    {
        id: '004',
        category: 'dolls',
        image: 'barby.webp',
        title: 'Барби',
        description: 'С куклой Барби Королевская невеста каждая девочка сможет провести репетицию собственной свадьбы у себя дома.',
        price: '1000'
    },
    {
        id: '005',
        category: 'dolls',
        image: 'doll02.jpg',
        title: 'Кукла LORI 15 см Сабелла',
        description: 'Кукла LORI Сабелла - пополнит коллекцию друзей LORI!',
        price: '369'
    },
    {
        id: '006',
        category: 'dolls',
        image: 'grogu.jpg',
        title: 'Фигурка Hasbro Star Wars Мандалорец Грогу',
        description: 'Фигурка Hasbro Star Wars Малыш Йода Мандалорец порадует любителей вселенной «Звездных войн» и дополнит их коллекцию героев.',
        price: '199'
    },
    {
        id: '007',
        category: 'books',
        image: 'spokoynoy-nochi-kotenok.png',
        title: 'Спокойной ночи, котёнок',
        description: 'Котенок уже большой. Но сегодня он никак не может заснуть. Хорошо, что у него есть друзья, они всегда готовы прийти на помощь.',
        price: '150'
    },
    {
        id: '008',
        category: 'books',
        image: 'slon01.jpg',
        title: 'Такой большой слонёнок',
        description: 'Это история о слонёнке, который впервые отправился гулять без мамы.',
        price: '160'
    },
    {
        id: '009',
        category: 'books',
        image: 'zaec01.png',
        title: 'Спокойной ночи, зайчонок!',
        description: 'Это книга-игра, которую можно читать вечером, чтобы уложить малыша спать. Вместе с главным героем книжки, зайчонком, он пройдет все этапы подготовки ко сну.',
        price: '174'
    }
]

let offerBuffer = []
const classActive = 'active'
const classDisplay = 'display'

let categoryList = document.getElementById('category')
categoryList.addEventListener('click', (event) => {
    clear()
    clearCategory()

    if (event.target.tagName === 'LI'){
        event.target.classList.add(classActive)
        getOffer(event.target.id)
        renderCards(offerBuffer)
    }
})

function clearCategory(){
    for (let item of categoryList.querySelectorAll('li')) {
        if (item.classList.contains(classActive)){
            item.classList.remove(classActive)
        }
    }
}

function getOffer(category){
    return offerBuffer = offers.filter((item) =>{
        if (item.category === category || category === 'all'){
            return true
        } else return false
    })
}

function renderCards (arr){
    let cardList = document.getElementById('card-list')
    clearCards()

    for (let i = 0; i < arr.length; i++){
        let card = document.getElementById('card').cloneNode(true)
        card.setAttribute('id',`${arr[i].id}`)
        card.querySelector('img').setAttribute('src',`images/product/${arr[i].image}`)
        card.querySelector('h3').innerHTML = arr[i].title
        card.querySelector('span').innerHTML = arr[i].price
        card.classList.add(classDisplay)
        cardList.appendChild(card)
    }
}

function clearCards(){
    for (let item of cardList.querySelectorAll('LI')){
        if (item.classList.contains(classDisplay)){
            item.remove()
        }
    }
}

let cardInfo = document.getElementById('card-info')
function showInfo(id){
    for (let item of offerBuffer){
        if (item.id === id){
            cardInfo.querySelector('h3').innerHTML = item.title
            cardInfo.querySelector('p').innerHTML = item.description
            cardInfo.querySelector('span').innerHTML = item.price
            cardInfo.classList.add(classDisplay)
        }
    }
}

let cardList = document.getElementById('card-list')
cardList.addEventListener('click', (event) => {
    console.log(event.target)
        if (event.target.tagName === 'LI'){
            showInfo(event.target.id)
        } else if (event.target.tagName === 'IMG' || event.target.tagName === 'H3' || event.target.tagName === 'P'){
            showInfo(event.srcElement.parentElement.id)
        }
})

const btnBy = document.getElementById('btnBy')
btnBy.addEventListener('click', ()=>{
    alert('Товар куплен')
    clear()
})

function clear(){
    clearCards()
    clearCategory()
    cardInfo.classList.remove(classDisplay)
}