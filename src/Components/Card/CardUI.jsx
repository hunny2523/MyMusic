import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './CardUI.module.css'

export default function CardUI({ name, images }) {


    return (
        <>

            <CardMedia
                component="img"
                className={styles.cardImg}
                image={images?.url}
                alt={name}
            />

            <Typography component="div" variant="title" className={styles.CardText} sx={{ marginTop: "0.8em" }}>
                {name}
            </Typography>

        </>
    );
}