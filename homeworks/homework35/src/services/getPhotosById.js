import { URL } from '../constants/url'

export const getPhotosById = async ({params}) => {
    console.log(params)
    try {
        const res = await fetch(`${URL.BASE}${URL.ALBUMS}${params.albumId}${URL.PHOTOS}`)
        const data = await res.json()
        return { photos: data }
    } catch (error) {
        console.error(error)
    }
}