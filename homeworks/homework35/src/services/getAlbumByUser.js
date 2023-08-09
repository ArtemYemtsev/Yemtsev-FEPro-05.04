import { URL } from '../constants/url'

export const getAlbumByUser = async ({ params }) => {
    try {
        const res = await fetch(`${URL.BASE}${URL.USERS}/${params.userId}${URL.ALBUMS}`)
        const data = await res.json()
        return { albums: data }
    } catch (error) {
        console.error(error)
    }
}