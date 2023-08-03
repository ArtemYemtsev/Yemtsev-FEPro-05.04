let input = document.getElementById('postInput')
let postBtn = document.getElementById('postBtn')

const PATTERN = /^[1-9]+[0-9]?/
const BASE_URL = 'https://jsonplaceholder.typicode.com'

const CLASS_VALID = 'valid'
const CLASS_INVALID = 'invalid'
const CLASS_DISPLAY = 'display'
const CLASS_POST_RESP = 'post__response'
const CLASS_COMMENTS = 'comments'
const CLASS_COMM_ITEM = 'comments__item'

const Validation = () => {
    input.addEventListener('blur', () => {
        const VALID_RULE = PATTERN.test(input.value)
        if(VALID_RULE){
            input.classList.add(CLASS_VALID)
        } else input.classList.add(CLASS_INVALID)
    })
    
    input.addEventListener('focus', () => {
        if (input.classList.contains(CLASS_INVALID)) {
            input.classList.remove(CLASS_INVALID)
        }
    })
}

Validation()

postBtn.addEventListener('click', () => {
    let commBlock = document.querySelector(`.${CLASS_COMMENTS}`)
    commBlock.innerHTML = null

    if(commBlock.classList.contains(CLASS_DISPLAY)){
        commBlock.classList.remove(CLASS_DISPLAY)
    }

    if (PATTERN.test(input.value)){
        postRequest (input.value)
    } else {
        let postBlock = document.querySelector(`.${CLASS_POST_RESP}`)
        if(postBlock.classList.contains(CLASS_DISPLAY)){
            postBlock.classList.remove(CLASS_DISPLAY)
        }
    }
})

function postRequest (id) {
    fetch(`${BASE_URL}/posts/${id}`)
        .then(res => res.ok ? res : Promise.reject(res))
        .then(res => res.json())
        .then(res => renderPost(res))
        .catch(error => {
            console.error('PostRequestError',error)
            if (error.status == 404){error.errorText = 'Not found'}
            let postBlock = document.querySelector(`.${CLASS_POST_RESP}`)
            postBlock.classList.add(CLASS_DISPLAY)
            postBlock.innerHTML = `PostRequestError, Error code: ${error.status} ${error.errorText}, URL: ${error.url}`
        })
}

function renderPost (post) {
    let postBlock = document.querySelector(`.${CLASS_POST_RESP}`)
    postBlock.innerHTML = null
    postBlock.classList.add(CLASS_DISPLAY)
    let title = document.createElement('H3')
    title.classList.add('post__title')
    title.innerText = post.title
    let text = document.createElement('P')
    text.classList.add('post__text')
    text.innerText = post.body
    let btn = document.createElement('BUTTON')
    btn.setAttribute('type','button')
    btn.setAttribute('id','commentBtn')
    btn.classList.add('btn')
    btn.innerText = 'Get comments'
    postBlock.appendChild(title)
    postBlock.appendChild(text)
    postBlock.appendChild(btn)
    getComment()
}

function renderComments (comment) {
    let commBlock = document.querySelector(`.${CLASS_COMMENTS}`)
    commBlock.classList.add(CLASS_DISPLAY)
    commBlock.innerHTML = null
    for(let item of comment){
        let li = document.createElement('LI')
        li.classList.add(CLASS_COMM_ITEM)
        commBlock.appendChild(li)

        commItem = document.querySelector(`.${CLASS_COMM_ITEM}`)
        
        let title = document.createElement('H3')
        title.innerText = item.name
        commItem.appendChild(title)

        let text = document.createElement('P')
        text.innerText = item.body
        commItem.appendChild(text)

        let email = document.createElement('P')
        email.innerText = item.email
        commItem.appendChild(email)
    }
}

function commentsRequest (postId) {
    fetch(`${BASE_URL}/posts/${postId}/comments`)
        .then(res => res.ok ? res : Promise.reject(res))
        .then((res) => res.json())
        .then((res) => renderComments(res))
        .catch(error => {
            console.error('PostCommentsRequestError',error)
            if (error.status == 404){error.errorText = 'Not found'}
            let commBlock = document.querySelector(`.${CLASS_COMMENTS}`)
            commBlock.classList.add(CLASS_DISPLAY)
            commBlock.innerHTML = `PostCommentsRequestError, Error code: ${error.status} ${error.errorText}, URL: ${error.url}`
        })
}

const getComment = () => {
    let commentBtn = document.getElementById('commentBtn')
    commentBtn.addEventListener('click', () => {
        commentsRequest (input.value)
    })
}