import { Typography } from '@mui/material'
import React from 'react'
import styles from './Headings.module.css'

const Headings = ({ heading }) => {
    return (
        <h3 className={styles.heading}>
            {heading}
        </h3>

    )
}

export default Headings
