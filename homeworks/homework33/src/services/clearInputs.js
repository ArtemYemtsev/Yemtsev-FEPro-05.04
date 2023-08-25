export const clearInputs = () => {
    const form = document.getElementById('formik_form')
    let inputs = form.getElementsByTagName('INPUT')
    for(let item of inputs) {
        item.value = ''
    }
}