import { URL } from '../constants/url'

export const getUsers = async () => {
    try {
        const res = await fetch(`${URL.BASE}${URL.USERS}`)
        const data = await res.json()
        return { users: data }
    } catch (error) {
        console.error(error)
    }
}