let offers = [
    {
        id: '001',
        category: 'cars',
        image: '001.webp',
        title: 'Экскаватор колёсный 1',
        description: 'Экскаватор из серии Lena Truxx. Подвижный ковш управляется с помощью ручки. Стальные оси и открывающаяся кабина. В комплекте фигурка рабочего.',
        price: '1080'
    },
    {
        id: '002',
        category: 'dolls',
        image: 'barby.webp',
        title: 'Барби 1',
        description: 'С куклой Барби Королевская невеста каждая девочка сможет провести репетицию собственной свадьбы у себя дома.',
        price: '1000'
    },
    {
        id: '003',
        category: 'books',
        image: 'spokoynoy-nochi-kotenok.png',
        title: 'Спокойной ночи, котёнок 1',
        description: 'Котенок уже большой. Но сегодня он никак не может заснуть. Хорошо, что у него есть друзья, они всегда готовы прийти на помощь.',
        price: '150'
    }
]

let offerBuffer = []

function getOffer(category){
    offerBuffer = offers.filter((item) =>{
        if (item.category === category || category === 'all'){
            return true
        } else return false
    })
    return offerBuffer
}

function renderCards (arr){
    let cardList = document.getElementById('card-list')
    
    for (let item of cardList.querySelectorAll('LI')){
        if (item.classList.contains('display')){
            item.remove()
        }
    }

    for (let i = 0; i < arr.length; i++){
        let card = document.getElementById('card').cloneNode(true)
        card.setAttribute('id',`${arr[i].id}`)
        card.querySelector('img').setAttribute('src',`images/${arr[i].image}`)
        card.querySelector('h3').innerHTML = arr[i].title
        card.querySelector('span').innerHTML = arr[i].price
        card.classList.add('display')
        cardList.appendChild(card)
    }
}

function showInfo(id){
    let cardInfo = document.getElementById('card-info')
    let product = {}
    for (let item of offerBuffer){
        if (item.id === id){
            product = item
        }
    }

    cardInfo.querySelector('h3').innerHTML = product.title
    cardInfo.querySelector('p').innerHTML = product.description
    cardInfo.querySelector('span').innerHTML = product.price
    cardInfo.classList.add('display')
    
}

let categoryList = document.getElementById('category')
categoryList.addEventListener('click', (event) => {

    for (let item of categoryList.querySelectorAll('li')) {
        if (item.classList.contains('active')){
            item.classList.remove('active')
        }
    }

    if (event.target.tagName === 'LI'){
        event.target.classList.add('active')
        getOffer(event.target.id)
        renderCards(offerBuffer)
    }

})

let cardList = document.getElementById('card-list')
cardList.addEventListener('click', (event) => {
    console.log(event)
        if (event.target.tagName === 'LI' || event.target.children['*']){
            showInfo(event.target.id)
            console.log(event.target)
        }
        
    
})

