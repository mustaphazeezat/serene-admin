import { Formik } from 'formik';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../../components/forms/Input';
import AuthWrapper from '../../components/wrappers/AuthWrapper';
import { auth } from '../../firebase';
import { ForgetPasswordSchema } from '../../utils/yup-validate';

const ForgotPassword = () => {
    const [submitting, setIsSubmitting] = useState(false);
    const [submitted, setIsSubmitted] = useState(false);

    const [error, setError] = useState('')

    
    const handleReset = (values) =>{
        setIsSubmitting(true)
        setError('')
        auth.sendPasswordResetEmail(values.email)
        .then((userCredential) => {
          setIsSubmitting(false)
            setIsSubmitted(true)
      })
      .catch((error) => {
        setError('No user with this Email.')
        setIsSubmitting(false)
      });
    }
    return (
        <AuthWrapper title='Reset password'>
            {
                !submitted?
                <Formik
                initialValues={{
                    email: ''
                }}
                validationSchema={ForgetPasswordSchema}
                onSubmit={values=> handleReset(values)}
            >
                {({values, errors, handleChange, handleBlur, handleSubmit})=>(
                    <>
                        {error.length > 0? <p className='error'>{error}</p>: null }
                        
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
                            <p className="auth-info">
                                <Link to="/log-in" >Back to login</Link>
                            </p>
                            <div className="d-flx-alc-jc auth-action-wrap">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className='submit-btn'
                                >
                                {!submitting ? 'Reset password' : 'Loading...'}
                                </button>
                            </div>
                        </form>
                    </>
                )}
                </Formik>:
                <div className='password-info'>
                    <p>A link to change your password has been sent to your email</p>
                    
                </div>
            }
        </AuthWrapper>
    )
}

export default ForgotPassword
