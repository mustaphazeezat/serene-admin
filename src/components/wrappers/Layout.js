import React from 'react'
import Header from '../Header'
import SideBar from '../SideBar'

const Layout = ({children, pageTitle}) => {
    return (
        <React.Fragment>
            <Header pageTitle={pageTitle} />
            <div className='page-layout'>
                <SideBar/>
                <main>
                    {children}
                </main>
            </div>
            
        </React.Fragment>
    )
}

export default Layout

