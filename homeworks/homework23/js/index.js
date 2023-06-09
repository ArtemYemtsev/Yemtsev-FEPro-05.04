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

const CLASS_ACTIVE = 'active'
const CLASS_DISPLAY = 'display'
const CLASS_CAT_LIST_ITEM = 'shop__form__category__list__item'
const CLASS_CARD_ITEM = 'shop__form__cards__item'
const CLASS_CARD_IMG = 'card__image'
const CLASS_CARD_TITLE = 'card__title'
const CLASS_CARD_PRICE = 'card__price'
const CLASS_CARD_PRICE_VALUE = 'price'

let offerBuffer = []

const renderCategories = (cat) => {
    let catList = document.getElementById('category')

    for (let i = 0; i < cat.length; i++){
        let catItem = document.createElement('li')
        catItem.classList.add(CLASS_CAT_LIST_ITEM)
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

    if (event.target.classList.contains(CLASS_CAT_LIST_ITEM)){
        event.target.classList.add(CLASS_ACTIVE)
        getOffer(event.target.id)
        renderCards(offerBuffer)
    }
})

function clearCategory(){
    for (let item of categoryList.querySelectorAll(`.${CLASS_CAT_LIST_ITEM}`)) {
        if (item.classList.contains(CLASS_ACTIVE)){
            item.classList.remove(CLASS_ACTIVE)
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
        card.querySelector(`.${CLASS_CARD_IMG}`).setAttribute('src',`images/product/${arr[i].image}`)
        card.querySelector(`.${CLASS_CARD_TITLE}`).innerHTML = arr[i].title
        card.querySelector(`.${CLASS_CARD_PRICE_VALUE}`).textContent = arr[i].price
        card.classList.add(CLASS_DISPLAY)
        cardList.appendChild(card)
    }
}

const createCard = () => {
    let card = document.createElement('li')
    card.classList.add(CLASS_CARD_ITEM)
    const cardTags = ['img','h3','p','span']
    for (let item of cardTags){
        if (item == 'span'){
            card.querySelector('p').appendChild(document.createElement(item))
            card.querySelector('p').appendChild(document.createTextNode(String.fromCharCode(0x20B4)))
        } else card.appendChild(document.createElement(item))
    }
    card.querySelector('img').classList.add(CLASS_CARD_IMG)
    card.querySelector('h3').classList.add(CLASS_CARD_TITLE)
    card.querySelector('p').classList.add(CLASS_CARD_PRICE)
    card.querySelector('span').classList.add(CLASS_CARD_PRICE_VALUE)
    return card
}

function clearCards(){
    for (let item of cardList.querySelectorAll(`.${CLASS_CARD_ITEM}`)){
        if (item.classList.contains(CLASS_DISPLAY)){
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
            cardInfo.querySelector(`.${CLASS_CARD_PRICE_VALUE}`).innerHTML = item.price
            cardInfo.classList.add(CLASS_DISPLAY)
            cardInfo.title = id
            console.log(cardInfo)
        }
    }
}

let cardList = document.getElementById('card-list')
cardList.addEventListener('click', (event) => {
    
    const ETC = event.target.classList
    const CHECK_CARD_TAGS = ETC.contains(CLASS_CARD_IMG) || ETC.contains(CLASS_CARD_TITLE) || ETC.contains(CLASS_CARD_PRICE)
    
    if (ETC.contains(CLASS_CARD_ITEM)){
        showInfo(event.target.id)
    } else if (CHECK_CARD_TAGS){
        showInfo(event.srcElement.parentElement.id)
    }
})

const btnBy = document.getElementById('btnBy')
btnBy.addEventListener('click', ()=>{
    orderForm()
})

function clear(){
    clearCards()
    clearCategory()
    cardInfo.classList.remove(CLASS_DISPLAY)
}

const cities = [
    {
        id:"i49000",
        name:"Днепр"
    },
    {
        id:"i01000",
        name:"Киев"
    },
    {
        id:"i69000",
        name:"Запорожье"
    }
]

const postOffice = [
    {
        id:"i49001",
        cityId:"i49000",
        name:"Отделение №1",
        address:"Днепр, ул. Маршала Малиновского, 114"
    },
    {
        id:"i49002",
        cityId:"i49000",
        name:"Отделение №2",
        address:"Днепр, ул. Академика Янгеля, 40"
    },
    {
        id:"i49002",
        cityId:"i49000",
        name:"Отделение №3",
        address:"Днепр, ул. Тверская, 1"
    },
    {
        id:"i01001",
        cityId:"i01000",
        name:"Отделение №1",
        address:"Киев, ул. Пироговский путь, 135"
    },
    {
        id:"i01002",
        cityId:"i01000",
        name:"Отделение №2",
        address:"Киев, ул. Богатырская, 11"
    },
    {
        id:"i01003",
        cityId:"i01000",
        name:"Отделение №3",
        address:"Киев, ул. Калачевская, 13"
    },
    {
        id:"i69001",
        cityId:"i69000",
        name:"Отделение №1",
        address:"Запорожье, ул. Грязнова, 2в"
    },
    {
        id:"i69002",
        cityId:"i69000",
        name:"Отделение №2",
        address:"Запорожье, ул. Карпенка-Карого, 58"
    },
    {
        id:"i69003",
        cityId:"i69000",
        name:"Отделение №3",
        address:"Запорожье, ул. Айвазовского, 9"
    }
]

function orderForm(){
    
    const CLASS_ORDER = 'order'
    const CLASS_OFFER = 'order__form__offer'

    document.querySelector(`.${CLASS_ORDER}`).classList.add(CLASS_DISPLAY)
    closePopup(CLASS_ORDER)
    renderInfo (CLASS_OFFER)

    let cityList = document.getElementById('city')
    for (let item of cities){
        cityList.options[cityList.options.length] = new Option(item.name,item.name)
        cityList.querySelector(`option[value=${item.name}]`).setAttribute('id',`${item.id}`)
    }

    renderPostOffice(cityList)

    cityList.addEventListener('change',() => {
        renderPostOffice(cityList)
    })

    let inputsName = document.querySelectorAll('.name')

    const CLASS_VALID = 'valid'
    const CLASS_INVALID = 'invalid'
    const NAME_PATTERN = /^(?![\d+_@.-]+$)[а-яА-Я0-9+_@.-]*$/

    for (let input of inputsName){
        input.addEventListener('blur', () =>{
            const NAME_RULE = NAME_PATTERN.test(input.value) && input.value.length > 1
            if(NAME_RULE){
                input.classList.add(CLASS_VALID)
            } else input.classList.add(CLASS_INVALID)
        })
        input.addEventListener('focus', () => {
            if (input.classList.contains(CLASS_INVALID)) {
                input.classList.remove(CLASS_INVALID)
            }
        })
    }

    let totalPrice = document.querySelector('.total-price-value')
    let amount = document.getElementById('amount')
    totalPrice.setAttribute('value',`${sum(getInfo()[0].price, amount.value)}`)
    amount.addEventListener('change', () => {
        totalPrice.setAttribute('value',`${sum(getInfo()[0].price, amount.value)}`)
    })

    const BTN_CONFIRM = document.getElementById('btn-buy')
    BTN_CONFIRM.addEventListener('click', () => {

        let input_fields = document.querySelectorAll('.input-item')
        let inputValueArr = []
        
        for (let input of input_fields){
            const VALIDATION_RULE = (input.value === null || input.value.trim() === "") && input.name != 'father-name' && input.id != 'comments'
            const VALIDATION_RULE_INPUTS = input.type === 'radio' && input.checked === true || input.type != 'radio'
            const VALIDATION_RULE_CASH = input.type === 'radio' && input.value === 'cash'
            const VALIDATION_RULE_BANK = input.type === 'radio' && input.value === 'bank_card'
            
            if(VALIDATION_RULE){
                return alert('Заполните обязательные поля!')
            } else if(VALIDATION_RULE_INPUTS){
                if (VALIDATION_RULE_CASH ){
                    input.value = "Послеоплата"
                } else if (VALIDATION_RULE_BANK) {
                    input.value = "Оплата банковской картой"
                }

                const replace = () => {
                    for(let i = 0; i < postOffice.length; i++){
                        if (input.value === postOffice[i].id){
                            inputValueArr.push(`${postOffice[i].name}, ${postOffice[i].address}`)
                            return true
                        }
                    }
                }

                if (replace()){
                    continue
                } else inputValueArr.push(input.value)
            }
        }

        orderTotal(inputValueArr)
    })
}

function renderPostOffice (list) {
    let postList = document.getElementById('post-office')
    clearSelect (postList)
    let selectPostList = postOffice.filter((item) => item.cityId === list.options[list.selectedIndex].id)
        for (let item of selectPostList){
            postList.options[postList.options.length] = new Option(`${item.name}\n${item.address}`,item.id)
        }
}

function clearSelect (select) {
    select.querySelectorAll('option').forEach(o => o.remove())
}

const getInfo = () => {return offerBuffer.filter((item) => item.id === cardInfo.title)}

const sum = (price,amount) => {return price*amount}

function orderTotal(inputValArr){

    const ORDER_INFO = 'order-info'
    const CLASS_ORDER_INFO_DESC= 'order-info__inner__desc'

    let orderInfo = document.getElementById(ORDER_INFO)
    orderInfo.classList.add(CLASS_DISPLAY)
    closePopup(ORDER_INFO)
    renderInfo (CLASS_ORDER_INFO_DESC)

    let totalList = document.getElementById('orderInfoList')

    const OUTPUT_LIST_TITLE = ['Имя','Фамилия','Отчество','Город','Отделение почты','Способ оплаты','Количество','Сумма (грн.)','Коментарии']
    const CLASS_ORDER_INFO_LI = 'order-info__list__item'

    totalList.querySelectorAll(`.${CLASS_ORDER_INFO_LI}`).forEach(item => item.remove())
    
    for (let item = 0; item < OUTPUT_LIST_TITLE.length; item++ ){
        let li = document.createElement("LI")
        li.classList.add(CLASS_ORDER_INFO_LI)
        li.innerHTML = `${OUTPUT_LIST_TITLE[item]}: ${inputValArr[item]}`
        totalList.appendChild(li)
    }
}

function renderInfo (className) {
    let order = document.querySelector(`.${className}`)

    const CLASS_OFFER_IMG = 'order__form__offer__img'
    const CLASS_OFFER_TITLE = 'order__form__offer__title'

    order.appendChild(document.createElement("IMG"))
    order.appendChild(document.createElement("H3"))
    order.querySelector('img').classList.add(CLASS_OFFER_IMG)
    order.querySelector('h3').classList.add(CLASS_OFFER_TITLE)
    order.querySelector(`.${CLASS_OFFER_IMG}`).setAttribute('src',`images/product/${getInfo()[0].image}`)
    order.querySelector(`.${CLASS_OFFER_IMG}`).setAttribute('alt',`order_img`)
    order.querySelector(`.${CLASS_OFFER_TITLE}`).innerHTML = getInfo()[0].title
}

const closePopup = (className) => {
    const CLASS_POPUP_CLOSE = 'popup__close'
    const close = document.querySelector(`.${className}`).querySelector(`.${CLASS_POPUP_CLOSE}`)
    close.addEventListener('click',() => {
        document.querySelector(`.${className}`).classList.remove(CLASS_DISPLAY)
    })
}