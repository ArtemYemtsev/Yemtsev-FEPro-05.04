import { TODOS_STORAGE } from '../constants/storage.js';

export const getTodos = () => {
    if(TODOS_STORAGE != null){
        return JSON.parse(TODOS_STORAGE)
    } else return []
}