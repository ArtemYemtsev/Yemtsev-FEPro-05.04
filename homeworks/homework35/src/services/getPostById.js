import { URL } from '../constants/url'

export const getPostById = async ({ params }) => {
    try {
        const res = await fetch(`${URL.BASE}${URL.POSTS}/${params.postId}`)
        const data = await res.json()
        return { post: data }
    } catch (error) {
        console.error(error)
    }
}