import React from 'react'
import { Link } from 'react-router-dom'

const AuthWrapper = ({title, children}) => {
    return (
        <section className='auth-main-wrapper main-wrapper-y'>
            <div  className='auth logo-holder'>
                <Link to='/'>S<span>e</span>r<span>e</span>n<span>e</span></Link>
            </div>
            <div className='width-500 auth-wrapper'>
                <h1>{title}</h1>
                {children}
            </div>
        </section>
    )
}

export default AuthWrapper
