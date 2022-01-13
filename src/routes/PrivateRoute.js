import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const {user} = useSelector(state => state.user)
    
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user.id || JSON.parse(localStorage.getItem('@__serene__'))? <Outlet /> : <Navigate to="/log-in" />;
    
}

export default PrivateRoute
