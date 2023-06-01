import { Typography } from '@mui/material'
import React, { Fragment } from 'react'
import styles from './Headings.module.css'
import { Link } from 'react-router-dom'

const Headings = ({ heading }) => {
    return (
        <div className={styles.headingWrapper}>
            <h3 className={styles.heading}>
                {heading}
            </h3>
            <Link to="/playlist" className={styles.showAllLink}>Show All</Link>
        </div>

    )
}

export default Headings
