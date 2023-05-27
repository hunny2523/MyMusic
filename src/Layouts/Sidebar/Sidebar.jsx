import React, { Fragment } from 'react'
import styles from './sidebar.module.css'
import Profile from './Components/Profile/Profile'
import Navigation from './Components/Navigation/Navigation'
import { Typography } from '@mui/material'
import { sidebarLabels } from './Data/SidebarData'

const Sidebar = () => {
    const navOptions = sidebarLabels.sidebarLabels.sidebarOptions;
    const footerText = sidebarLabels.sidebarLabels.siderbarFooter;
    return (
        <div className={styles.sidebar}>
            <Profile />
            <Navigation options={navOptions} />
            <Typography variant="caption" className={styles.footerText}>
                {footerText}
            </Typography>
        </div>
    )
}

export default Sidebar