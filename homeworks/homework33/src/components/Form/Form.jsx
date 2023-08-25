import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import { useFormik } from 'formik'

import "./Form.css"

import { inputs } from '../../constants/inputs.js'
import { validationSchema } from "../../constants/validationSchema.js"
import { clearInputs } from "../../services/clearInputs.js"

export const Form = () => {
    const formik = useFormik ({
        initialValues: {
            name: '',
            email: '',
            tel: '',
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            alert(JSON.stringify(values, null, 2))
            resetForm({values: ''})
            clearInputs()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="form" id="formik_form" autoComplete="off">
            <fieldset className="form__fieldset">
                <legend className="form__fieldset__title">formik</legend>
                {inputs.map(item => 
                    <Input 
                        key={item}
                        id={item}
                        label={item}
                        name={item}
                        type={
                            item === 'name'
                            ?
                            'text'
                            :
                            item === 'email'
                            ?
                            'email'
                            :
                            'tel'
                        }
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.item}
                        error={
                            item === 'name' 
                            ?
                            formik.errors.name && formik.touched.name ? formik.errors.name : false 
                            :
                            item === 'email'
                            ?
                            formik.errors.email
                            :
                            formik.errors.tel}
                    />
                )}
            </fieldset>
            <div className="form__buttons">
                <Button
                    children={'Reset'}
                    type={'reset'}/>
                <Button
                    children={'Submit'}
                    type={'submit'}
                    disabled={!(formik.isValid && formik.dirty)}/>
            </div>
        </form>
    )
}