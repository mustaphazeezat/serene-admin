import * as Yup from 'yup'


export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Must be atleast 3 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Must be atleast 6 characters')
        .required('Password is required'),   
    // passwordConfirmation: Yup.string()
    // .test('passwords-match', 'Passwords must match', function (value) { return this.parent.password === value })
})

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Must be atleast 6 characters')
        .required('Password is required'), 
})

export const ForgetPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
})