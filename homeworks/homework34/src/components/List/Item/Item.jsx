import { Button } from '../../Button'
import './Item.css'

import { useDispatch } from 'react-redux'
import { todoToggle, removeTodo } from '../../../store/redusers/todos/todoSlice'

export const Item = ({ todo, delTD }) => {
    const dispatch = useDispatch()
    
    const toggleHandler = (id) => {
        dispatch(todoToggle(id))
    }

    const removeHandler = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <li className={`item ${ todo.done ? 'item--complete' : ''}`} id={ todo.id }>
            <p className="item__text">{ todo.text }</p>
            <div className="item__date">
                Date:
                <span>{ todo.date }</span>
            </div>
            <Button 
                hendlerClick={() => toggleHandler(todo.id)} 
                className={`${ todo.done ? 'button--completed' : ''}`}>
                    {todo.done ? 'Done' : 'In progress'}
            </Button>
            <Button 
                hendlerClick={() => removeHandler(todo.id)} 
                className={"button--delete"}>
                    {'Delete'}
            </Button>
        </li>
    )
}