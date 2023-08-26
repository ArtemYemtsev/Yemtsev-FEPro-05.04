import './List.css'
import { Item } from './Item'

export const List = ( {todos} ) => {

    return (
        <ul className='list'>
            {todos !== false ? 
            todos.map(todo => <Item
                key={ todo.id } 
                todo={ todo }  
                />) 
                : 
                console.log('no todos in storage')}
        </ul>
    )
}