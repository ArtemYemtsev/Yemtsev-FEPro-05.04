import './List.css'
import { Item } from './Item'

export const List = ( {todos, toggleTD, delTD} ) => {

    return (
        <ul className='list'>
            {todos !== false ? 
            todos.map(todo => <Item
                key={ todo.id } 
                todo={ todo } 
                toggleTD={ toggleTD } 
                delTD={ delTD }/>) 
                : 
                console.log('no todos in storage')}
        </ul>
    )
}