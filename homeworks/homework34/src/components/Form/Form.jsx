import './Form.css'
import { Button } from '../Button'
import { v4 } from 'uuid'
import { date } from '../../services/date'
import { useDispatch } from 'react-redux'
import { todoAdd } from '../../store/redusers/todos/todoSlice'
import { useFormik } from 'formik'
import { validationSchema } from '../../constants/validationSchema.js';
import { clearInputs } from '../../services/clearInputs.js'

export const Form = () => {
    const dispatch = useDispatch()
    const formik = useFormik ({
        initialValues: {
            todo: ''
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            const todo = {
                id: v4(),
                text: values.todo,
                date: date(),
                done: false
            }
            dispatch(todoAdd(todo))
            resetForm({values: ''})
            clearInputs()
        }
    })
    
    return (
        <form onSubmit={formik.handleSubmit} className="form" id="form">
            <div className='form__input__block'>  
                {formik.errors.todo && formik.touched.todo 
                    ?
                    (<div className="error">{formik.errors.todo}</div>)
                    : 
                    null
                }
                <input 
                    type="text"
                    name="todo"
                    placeholder="Enter todo text"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="form__input"
                    autoComplete='off'
                    />
            </div>
            <Button type={"submit"} className={'form__submit__btn'}>{"Add todo"}</Button>
        </form>
    )
}