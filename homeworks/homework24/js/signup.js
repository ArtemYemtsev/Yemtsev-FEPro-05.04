const CITY = [
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
    ,
    {
        id:"i61000",
        name:"Харьков"
    }
    ,
    {
        id:"i79000",
        name:"Львов"
    }
    ,
    {
        id:"i88000",
        name:"Ужгород"
    }
]
const CLASS_INPUT_SIGN = 'signup__form__item__input'
const CLASS_INPUT_RADIO = 'signup__form__item__input--radio'
const CLASS_INPUT_CHECK = 'signup__form__item__lang__item'
const CLASS_VALID = 'valid'
const CLASS_INVALID = 'invalid'
const CLASS_DISPLAY = 'display'
const CLASS_INFO_TABLE = 'table-info'
const CLASS_TABLE = 'table'
const NAME_PATTERN = /^(?![\d+_@.-]+$)[а-яА-Я0-9+_@.-]*$/
const DATE_PATTERN = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

let inputValueArr = []

renderCitiesList()

validation ()

let buttonDone = document.getElementById('btnDone')
buttonDone.addEventListener('click', () => {
    
    let inputsSignup = document.querySelectorAll(`.${CLASS_INPUT_SIGN}, .${CLASS_INPUT_RADIO}, .${CLASS_INPUT_CHECK}`)
    for(let input of inputsSignup){
        const VALIDATION_RULE = (input.value === null || input.value.trim() === "")
        const VALIDATION_RULE_INPUTS_RADIO = input.type === 'radio' && input.checked === true
        const VALIDATION_RULE_INPUTS_CHECKBOX = input.type === 'checkbox' && input.checked === true
        const VALIDATION_RULE_INPUTS_OTHER = input.type != 'radio' && input.type != 'checkbox'
        const VALIDATION_RULE_INPUTS = VALIDATION_RULE_INPUTS_RADIO || VALIDATION_RULE_INPUTS_CHECKBOX || VALIDATION_RULE_INPUTS_OTHER
        if(VALIDATION_RULE){
                alert('Заполните все поля!')
                validError()
            return 
        } else if(VALIDATION_RULE_INPUTS){
            inputValueArr.push(input.value)
        }
    }
    infoTable(inputValueArr)
})

function renderCitiesList () {
    let cityList = document.getElementById('city')
    for (let item of CITY){
        cityList.options[cityList.options.length] = new Option(item.name,item.name)
        cityList.querySelector(`option[value=${item.name}]`).setAttribute('id',`${item.id}`)
    }
}

function validation (){
    let inputs = document.querySelectorAll(`.${CLASS_INPUT_SIGN}`)
    for(let input of inputs){
        input.addEventListener('blur', () =>{
            const RULE1 = input.name === 'birth-date' && DATE_PATTERN.test(input.value)
            const NAME_RULE = NAME_PATTERN.test(input.value) && input.value.length > 1 || input.name == 'address' || RULE1
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
}

function validError(){
    let inputs = document.querySelectorAll(`.${CLASS_INPUT_SIGN}`)
    for(let input of inputs){
        const RULE1 = input.name === 'birth-date' && input.value.length == 10
        const NAME_RULE = NAME_PATTERN.test(input.value) && input.value.length > 1 || RULE1
        if(NAME_RULE){
            input.classList.add(CLASS_VALID)
        } else input.classList.add(CLASS_INVALID)
    }
    clearInputValueArr()
}

const clearInputValueArr = () => {inputValueArr = []}

function createPopup () {
    const CLASS_POPUP = 'popup'
    let infoTablePopup = document.getElementById('infoTable')
    infoTablePopup.classList.add(CLASS_POPUP)
    infoTablePopup.classList.add(CLASS_DISPLAY)
    closePopup(CLASS_INFO_TABLE)
}

const closePopup = (className) => {
    const CLASS_POPUP_CLOSE = 'popup__close'
    const close = document.querySelector(`.${className}`).querySelector(`.${CLASS_POPUP_CLOSE}`)
    close.addEventListener('click',() => {
        document.querySelector(`.${className}`).classList.remove(CLASS_DISPLAY)
        clearInputValueArr()
    })
}

function infoTable(inputValueArr){
    clearTable()
    createPopup()
    const rowLable = ['Имя','Фамилия','Дата рождения','Пол','Город','Адрес','Знание языков']
    let infoTableBlock = document.getElementById('infoTable')

    let table = document.createElement('table')
    table.classList.add(CLASS_TABLE)
    infoTableBlock.appendChild(table)
    for (let row = 0; row < 7; row++){
        let tr = document.createElement('tr');
        table.appendChild(tr);
        
        for (let col = 0; col < 2; col++){
            let td = document.createElement('td');
            if (col == 0){
                td.innerText = `${rowLable[row]}`
                tr.appendChild(td);
            } else if(row == 6){
                for(let i = 6; i < inputValueArr.length; i++){
                    td.innerHTML += `${inputValueArr[i]}<br>`
                }
                tr.appendChild(td);
            }
            else td.innerText = `${inputValueArr[row]}`
            tr.appendChild(td);
        }
    }
    const CLASS_SIGNUP_BTN = 'signup__form__btn'
    const CLASS_SUBMIT_ORDER = 'submit-order'
    const SUBMIT = document.createElement('button')
    SUBMIT.setAttribute('id','submit')
    SUBMIT.classList.add(CLASS_SIGNUP_BTN)
    SUBMIT.classList.add(CLASS_SUBMIT_ORDER)
    SUBMIT.innerText = 'Подтвердить регистрацию'
    infoTableBlock.appendChild(SUBMIT)
}

function clearTable(){
    let table = document.querySelector(`.${CLASS_TABLE}`)
    if (table){ table.remove() }
}
