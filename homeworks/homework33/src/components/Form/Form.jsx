import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import { useFormik } from 'formik'

import "./Form.css"

import { validationSchema } from "../../constants/validationSchema.js"

export const Form = () => {
    const formik = useFormik ({
        initialValues: {
            name: '',
            email: '',
            tel: '',
        },
        validationSchema,
        onSubmit: (values, {resetForm, setSubmitting} ) => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
            resetForm({
                    values: {
                        name: '',
                        email: '',
                        tel: '',
                    }})
        },
    })

    const inputs = [
        {
            name: 'name',
            type: 'text',
            value: formik.values.name,
            error: formik.errors.name && formik.touched.name ? formik.errors.name : false
        },
        {
            name: 'email',
            type: 'email',
            value: formik.values.email,
            error: formik.errors.email && formik.touched.email ? formik.errors.email : false
        },
        {
            name: 'tel',
            type: 'tel',
            value: formik.values.tel,
            error: formik.errors.tel && formik.touched.tel ? formik.errors.tel : false
        }
    ]

    return (
        <form onSubmit={formik.handleSubmit} className="form" id="formik_form" autoComplete="off">
            <fieldset className="form__fieldset">
                <legend className="form__fieldset__title">formik</legend>
                {inputs.map(item => 
                    <Input 
                        key={item.name}
                        id={item.name}
                        label={item.name}
                        name={item.name}
                        type={item.type}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={item.value}
                        error={item.error}
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