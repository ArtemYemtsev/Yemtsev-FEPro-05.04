import { PATTERN } from "../constants/patterns.js"

export const validation = () => {
    const form = document.getElementById('form')
    let inputs = form.getElementsByTagName('input')

    for(let input of inputs) {
        input.addEventListener('blur', () =>{
            const NAME_RULE = input.type === "text" && PATTERN.NAME.test(input.value) && input.value.length > 1 && input.value.trim()
            const TEL_RULE = input.type === "tel" && PATTERN.TEL.test(input.value) && input.value.trim()
            const EMAIL_RULE = input.type === "email" && PATTERN.EMAIL.test(input.value) && input.value.trim()
            const VALID_RULE = NAME_RULE || TEL_RULE || EMAIL_RULE
        
            if (VALID_RULE) {
                input.classList.add('input-valid')
            } else {
                input.classList.add('input-invalid')
            }
            
        })
        input.addEventListener('focus', () => {
            if (input.classList.contains('input-invalid')) {
                input.classList.remove('input-invalid')
            }
        })
    }
}