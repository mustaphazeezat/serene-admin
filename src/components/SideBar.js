import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'
import { userDetails } from '../redux/reducers.js/auth'
import Icon from './Icon'
import NavLinks from './NavLinks'

const SideBar = () => {
    const dispatch = useDispatch()
    const [loggingOut, setLoggingOut] = useState(false);
    const {navToggle} = useSelector(state => state.user)
   
    const handleLogOut=()=>{
        setLoggingOut(true)
        auth.signOut()
        dispatch(userDetails())
        localStorage.removeItem('@__serene__')
        setLoggingOut(false)
    }
    return (
        <aside className={`main-side ${navToggle? 'show-side-bar': ''}`}>
            <div className='nav-wrapper'>
                <nav className='navigation'>
                    <ul className='nav-list'>
                        <li><NavLinks page='dashboard' pageLink='/' icon='dashboard'  /></li>
                        <li><NavLinks page='menu' pageLink='/menu' icon='menu'  /></li>
                        <li><NavLinks page='restaurant setup' pageLink='/restaurant-setup' icon='setup'  /></li>
                    </ul>
                    <ul className='nav-list'>
                        <li><NavLinks page='settings' pageLink='/settings' icon='settings'  /></li> 
                        <li><button type='button' onClick={handleLogOut}>
                            <Icon svg='log-out' />
                            <span>Log out</span>
                        </button></li> 
                    </ul>
                </nav>
            </div>
            
        </aside>
    )
}

export default SideBar
