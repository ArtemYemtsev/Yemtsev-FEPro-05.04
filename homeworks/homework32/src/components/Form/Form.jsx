import { inputs } from '../../constants/inputs.js'
import { Button } from '../Button/Button.jsx'
import { Input } from './Input'
import { form } from "../../services/form.js"
import "./Form.css"

export const Form = ({handler}) => {

    return (
        <form className='form' id='form'>
            <fieldset>
                <legend>Add contact</legend>
                {inputs.map(item => 
                <Input 
                    key={item} 
                    label={item} 
                />)}
                <Button 
                    children={'Add'}
                    type={'button'}
                    but_type={'button--add'}
                    handler={handler}/>
                <Button 
                    children={'Cancel'} 
                    but_type={'remove'}
                    type={'button'}
                    handler={form}
                    button_todo={'close'}/>
            </fieldset>
        </form>
    )
}