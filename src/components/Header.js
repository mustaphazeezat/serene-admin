import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { navToggler } from '../redux/reducers.js/auth'

const Header = ({pageTitle}) => {
    const dispatch = useDispatch()
    const [activeNav, setActiveNav] = useState(false)
    return (
        <header className='header'>
           <div className='header-wrapper'>
                <div  className='auth logo-holder'>
                    <Link to='/'>S<span>e</span>r<span>e</span>n<span>e</span></Link>
                </div>
                <div className='user-info d-flx-alc-jsb'>
                    <h2>{pageTitle}</h2>
                    <div className='user-nav d-flx-alc'>
                        <div>notification</div>
                        <div>previewer</div>
                    </div>
                    <button className={`mobile-toggler ${activeNav? "show-mobile": ''}`} onClick={()=>{setActiveNav(activeNav=>!activeNav); dispatch(navToggler())}}> 
                        <span></span>
                    </button>
                </div>
           </div>
        </header>
    )
}

export default Header
