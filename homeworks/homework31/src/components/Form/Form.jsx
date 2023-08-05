import './Form.css'
import { Button } from '../Button'
import { v4 } from 'uuid'
import { date } from '../../services/date'
import { useState } from 'react';

export const Form = ({ pushTD }) => {

    const [value, setValue] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        const todo = {
            id: v4(),
            text: value,
            date: date(),
            done: false
        }
        pushTD(todo)
        setValue('')
    }
    
    return (
        <form onSubmit={submitForm} className="form">
            <input 
                type="text"
                value={ value }
                placeholder="Enter todo text"
                onChange={({ target }) => setValue(target.value)}
                className="form__input" />
            <Button type={"submit"}>{"Add todo"}</Button>
        </form>
    )
}