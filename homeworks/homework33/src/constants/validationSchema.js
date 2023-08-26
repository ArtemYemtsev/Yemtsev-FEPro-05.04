import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    tel: Yup.string()
        .matches(/^\d+$/, 'tel must match "0-9"')
        .min(12, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});