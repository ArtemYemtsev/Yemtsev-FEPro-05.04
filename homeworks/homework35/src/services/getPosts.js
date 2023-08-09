import { URL } from '../constants/url'

export const getPosts = async () => {
    try {
        const res = await fetch(`${URL.BASE}${URL.POSTS}`)
        const data = await res.json()
        return { posts: data }
    } catch (error) {
        console.error(error)
    }
}