import * as Yup from 'yup'

export const validationSchema = Yup.object({
    todo: Yup.string()
        .min(2, 'Too Short!')
        .max(250, 'Too Long!')
        .required('Enter text for add todo')
});