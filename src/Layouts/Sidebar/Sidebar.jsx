import React, { Fragment } from 'react'
import Profile from '../../Components/Profile/Profile'
import Navigation from '../../Components/Navigation/Navigation'
import styles from './sidebar.module.css'


const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Profile />
            <Navigation />
        </div>
    )
}

export default Sidebar