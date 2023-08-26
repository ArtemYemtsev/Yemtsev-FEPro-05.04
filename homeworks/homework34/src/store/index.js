import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './redusers/todos/todoSlice'

export const store = configureStore({
    reducer: {
        todoList: todoSlice
    }
})