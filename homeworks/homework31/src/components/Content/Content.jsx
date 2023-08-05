import "./Content.css"
import { List } from '../List'
import { Form } from "../Form"
import { useState, useEffect } from 'react'
import { getTodos } from "../../services/getTodos"
import { pushTodos } from "../../services/pushTodos"

export const Content = ( {title} ) => {
    const [todos, setTodos] = useState(getTodos())

    const addTodo = (todo) => {
        setTodos((prevState) => {
            return [...prevState, todo]
        })
    }

    const toggleTodo = (incTodo) => {
        setTodos((prevState) => {
            return prevState.map((todo) => todo.id === incTodo.id ? {...todo, done: !todo.done} : todo )
        })
    }

    const deleteTodo = (incTodo) => {
        setTodos((prevState) => {
            return prevState.filter((todo) => todo.id !== incTodo.id)
        })
    }

    useEffect(() => {
        pushTodos(todos)
        }, [todos]);

    return (
        <div className="content">
            <h3 className="content__title"> { title } </h3>
            <List todos={ todos } toggleTD={toggleTodo} delTD={deleteTodo} />
            <Form pushTD={addTodo}/>
        </div>
    )
}