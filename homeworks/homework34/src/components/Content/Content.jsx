import "./Content.css"
import { List } from '../List'
import { Form } from "../Form"
import { useEffect } from 'react'
import { pushTodos } from "../../services/pushTodos"
import { useSelector } from "react-redux"

export const Content = ( {title} ) => {
    const todoList = useSelector((state) => state.todoList.todos)

    useEffect(() => {
        pushTodos(todoList)
        }, [todoList]);

    return (
        <div className="content">
            <h3 className="content__title"> { title } </h3>
            <Form />
            <List todos={ todoList } />
        </div>
    )
}