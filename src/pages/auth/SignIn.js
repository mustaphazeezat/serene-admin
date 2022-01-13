import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/forms/Input';
import AuthWrapper from '../../components/wrappers/AuthWrapper';
import { auth } from '../../firebase';
import { LoginSchema } from '../../utils/yup-validate';
import { useDispatch } from 'react-redux';
import { userDetails } from '../../redux/reducers.js/auth';



const SignIn = () => {
    const [submitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged(user =>{
            dispatch(userDetails(user?.uid))
        })
    }, [dispatch])
    const handleLogin = (values) =>{
        setIsSubmitting(true)
        setError('')
        auth.signInWithEmailAndPassword(values.email, values.password)
        .then((userCredential) => {
            localStorage.setItem('@__serene__', JSON.stringify(userCredential.user.uid))
          setIsSubmitting(false)
          navigate('/')
      })
      .catch((error) => {
        setError('Email or password is not correct')
        setIsSubmitting(false)
      });
    }

    return (
        <AuthWrapper title='Log In'>
            <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={values=> handleLogin(values)}
            >
                {({values, errors, handleChange, handleBlur, handleSubmit})=>(
                    <>
                        {error.length > 0? <p className='error'>{error}</p>: null }
                        <p className="auth-info">
                            Don't have an account? <Link to="/sign-up">Sign up</Link>
                        </p>
                        <form onSubmit={e => {e.preventDefault(); handleSubmit();}} className="auth-form">
                            <Input
                                label="Email Address"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={errors.email}
                            />
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={errors.password}
                            />
                            <Link to='/forgot-password'>Forgot Password</Link>
                            <div className="d-flx-alc-jc auth-action-wrap">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className='submit-btn'
                                >
                                {!submitting ? 'Log In' : 'Logging in...'}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </Formik>
        </AuthWrapper>
    )
}

export default SignIn
