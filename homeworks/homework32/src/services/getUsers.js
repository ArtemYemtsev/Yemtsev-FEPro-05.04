import { URL } from '../constants/url.js'

export const getUsers = async () => {

    try{
        const res = await fetch(`${URL.BASE}`)
        const data = await res.json()
        return data
    } 
    catch(error) {
        console.log(error)
    }
}