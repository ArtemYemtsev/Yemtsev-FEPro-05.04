import { inputs } from '../constants/inputs.js'
import { PATTERN } from '../constants/patterns.js';
import { v4 } from 'uuid';

export const addItem = (handler) => {
    let contact = {
        id: v4(),
        name: '',
        phone: '',
        email: ''
    }

    const form = document.getElementById('form')
    let $inputs = form.getElementsByTagName('input')
    
    
    let NAME_RULE
    let TEL_RULE
    let EMAIL_RULE
    let VALID_RULE

    for (let input of $inputs) {
        if (input.type === "text") {
            NAME_RULE = PATTERN.NAME.test(input.value) && input.value.length > 1 && input.value.trim()
        } else if (input.type === "tel") {
            TEL_RULE = PATTERN.TEL.test(input.value) && input.value.trim()
        } else if (input.type === "email") {
            EMAIL_RULE = PATTERN.EMAIL.test(input.value) && input.value.trim()
        }
    }

    VALID_RULE = NAME_RULE && TEL_RULE && EMAIL_RULE

    if (VALID_RULE) {
        inputs.forEach(item => {
            let input = document.getElementById(item)
            contact[item] = input.value
            if (input.classList.contains('input-valid')) {
                input.classList.remove('input-valid')
            }
            input.value = ''
        })
        handler(contact)
    } 
} 
