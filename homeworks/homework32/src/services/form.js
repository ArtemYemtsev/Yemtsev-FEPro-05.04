import { validation } from "./validation.js"

export const form = (button_todo) => {
    if (button_todo === 'open') {
        let form = document.getElementById('form')
        form.classList.add('display')
        validation()
    }

    if (button_todo === 'close') {
        let form = document.getElementById('form')
        form.classList.remove('display')
    }
}