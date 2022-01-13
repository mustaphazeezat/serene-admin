import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'

const NavLinks = ({page, pageLink, icon, }) => {
    return (
        <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to={pageLink}>
            <Icon svg={icon}/>
            <span>{page}</span> 
        </NavLink>
    )
}

export default NavLinks
