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

let cat = [
    {
        id: 'cat001',
        name: 'cars',
        title: 'Машинки'
    },
    {
        id: 'cat002',
        name: 'dolls',
        title: 'Куклы'
    },
    {
        id: 'cat003',
        name: 'books',
        title: 'Книги'
    },
    {
        id: 'cat000',
        name: 'all',
        title: 'Все'
    }
]

const classActive = 'active'
const classDisplay = 'display'
const classCatListItem = 'shop__form__category__list__item'
const classCardItem = 'shop__form__cards__item'
const classCardImg = 'card__image'
const classCardTitle = 'card__title'
const classCardPrice = 'card__price'
const classCardPriceValue = 'price'

let offerBuffer = []

const renderCategories = (cat) => {
    let catList = document.getElementById('category')

    for (let i = 0; i < cat.length; i++){
        let catItem = document.createElement('li')
        catItem.classList.add(classCatListItem)
        catItem.id = `${cat[i].name}`
        catItem.innerHTML = `${cat[i].title}`
        catList.appendChild(catItem)
    }
}

renderCategories(cat)

let categoryList = document.getElementById('category')
categoryList.addEventListener('click', (event) => {
    clear()
    clearCategory()

    if (event.target.classList.contains(classCatListItem)){
        event.target.classList.add(classActive)
        getOffer(event.target.id)
        renderCards(offerBuffer)
    }
})

function clearCategory(){
    for (let item of categoryList.querySelectorAll(`.${classCatListItem}`)) {
        if (item.classList.contains(classActive)){
            item.classList.remove(classActive)
        }
    }
}

function getOffer(category){
    return offerBuffer = offers.filter((item) => (item.category === category || category === 'all'))
}

function renderCards (arr){
    let cardList = document.getElementById('card-list')
    clearCards()

    for (let i = 0; i < arr.length; i++){
        let card = createCard()
        card.setAttribute('id',`${arr[i].id}`)
        card.querySelector(`.${classCardImg}`).setAttribute('src',`images/product/${arr[i].image}`)
        card.querySelector(`.${classCardTitle}`).innerHTML = arr[i].title
        card.querySelector(`.${classCardPriceValue}`).textContent = arr[i].price
        card.classList.add(classDisplay)
        cardList.appendChild(card)
    }
}

const createCard = () => {
    let card = document.createElement('li')
    card.classList.add(classCardItem)
    const cardTags = ['img','h3','p','span']
    for (let item of cardTags){
        if (item == 'span'){
            card.querySelector('p').appendChild(document.createElement(item))
            card.querySelector('p').appendChild(document.createTextNode(String.fromCharCode(0x20B4)))
        } else card.appendChild(document.createElement(item))
    }
    card.querySelector('img').classList.add(classCardImg)
    card.querySelector('h3').classList.add(classCardTitle)
    card.querySelector('p').classList.add(classCardPrice)
    card.querySelector('span').classList.add(classCardPriceValue)
    return card
}

function clearCards(){
    for (let item of cardList.querySelectorAll(`.${classCardItem}`)){
        if (item.classList.contains(classDisplay)){
            item.remove()
        }
    }
}

let cardInfo = document.getElementById('card-info')
function showInfo(id){
    for (let item of offerBuffer){
        if (item.id === id){
            cardInfo.querySelector('.card-info__title').innerHTML = item.title
            cardInfo.querySelector('.card-info__desription').innerHTML = item.description
            cardInfo.querySelector(`.${classCardPriceValue}`).innerHTML = item.price
            cardInfo.classList.add(classDisplay)
        }
    }
}

let cardList = document.getElementById('card-list')
cardList.addEventListener('click', (event) => {
    
    const etc = event.target.classList
    const checkCardTags = etc.contains(classCardImg) || etc.contains(classCardTitle) || etc.contains(classCardPrice)
    
    if (etc.contains(classCardItem)){
        showInfo(event.target.id)
    } else if (checkCardTags){
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