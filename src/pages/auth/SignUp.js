import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth, firestore } from '../../firebase';
import { userDetails } from '../../redux/reducers.js/auth';
import {Formik} from 'formik'
import { SignupSchema } from '../../utils/yup-validate';
import {Link, useNavigate} from 'react-router-dom'
import Input from '../../components/forms/Input';
import AuthWrapper from '../../components/wrappers/AuthWrapper';




const SignUP = () => {
  const [userName, setuserName] = useState('')
  const [error, setError] = useState('')
  let [submitting, setIsSubmitting] = useState(false);
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged(user =>{
            dispatch(userDetails(user?.uid))
        })
    }, [dispatch])
    useEffect(() => {
      if (user.id) {
        firestore.collection('userserene').doc(user.id).set({
            firstName: userName,
      });
      }else{
        return null
      }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
   
    const handleSignup = (values)=>{
        setIsSubmitting(true)
        setError('')
        setuserName(values.name)
        auth.createUserWithEmailAndPassword(values.email, values.password)
        .then((userCredential) => {
          localStorage.setItem('@__serene__', JSON.stringify(userCredential.user.uid))
          setIsSubmitting(false)
          navigate('/')
      })
      .catch((error) => {
        setError('There is a user with this email.')
        setIsSubmitting(false)
      });
      
    }
    return (
      <AuthWrapper title='sign up'>
        <Formik
            initialValues={{ 
                name:'',
                email: '', 
                password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values=> handleSignup(values)}
        >
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                <>
                  {error.length > 0? <p className='error'>{error}</p>: null }
                  <p className="auth-info">
                    Have an account? <Link to="/log-in" > Log in</Link>
                  </p>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="auth-form"
                  >
                    <Input
                      label="Name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      error={errors.name}
                    />
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
                    
                    <div className="d-flx-alc-jc auth-action-wrap">
                      <button
                          type="submit"
                          disabled={submitting}
                          className='submit-btn'
                      >
                        {!submitting ? 'Sign up' : 'Loading...'}
                      </button>
                    </div>
                  </form>
                </>
            )}
        </Formik>
      </AuthWrapper>
    )
}

export default SignUP
