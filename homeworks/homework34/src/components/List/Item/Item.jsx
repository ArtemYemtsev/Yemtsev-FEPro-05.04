import { Button } from '../../Button'
import './Item.css'

export const Item = ({ todo, toggleTD, delTD }) => {
    
    const toggleTodo = (todo) => {
        toggleTD(todo)
    }

    const deleteTodo = (todo) => {
        delTD(todo)
    }

    return (
        <li className={`item ${ todo.done ? 'item--complete' : ''}`} id={ todo.id }>
            <p className="item__text">{ todo.text }</p>
            <div className="item__date">
                Date:
                <span>{ todo.date }</span>
            </div>
            <Button 
                hendlerClick={() => toggleTodo(todo)} 
                className={`${ todo.done ? 'button--completed' : ''}`}>
                    {todo.done ? 'Done' : 'In progress'}
            </Button>
            <Button 
                hendlerClick={() => deleteTodo(todo)} 
                className={"button--delete"}>
                    {'Delete'}
            </Button>
        </li>
    )
}