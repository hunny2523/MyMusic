import React, { Fragment } from 'react'
import Profile from '../../Components/Profile/Profile'
import Navigation from '../../Components/Navigation/Navigation'

const Sidebar = () => {
    return (
        <Fragment>
            <Profile />
            <Navigation />
        </Fragment>
    )
}

export default Sidebar