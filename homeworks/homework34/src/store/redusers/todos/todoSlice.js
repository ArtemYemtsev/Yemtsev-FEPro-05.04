import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from '../../../services/getTodos.js' 

const initialState = {
    todos: getTodos()
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdd({todos}, action) {
            todos.push({
                id: action.payload.id,
                text: action.payload.text,
                date: action.payload.date,
                done: false
            })
        },
        todoToggle({todos}, {payload}) {
            const todo = todos.find(todo => todo.id === payload)
            todo.done = !todo.done
        },
        removeTodo(state, {payload}) {
            state.todos = state.todos.filter(todo => todo.id !== payload)
        }   
    }
})

export const { todoAdd, todoToggle, removeTodo } = todoSlice.actions
export default todoSlice.reducer