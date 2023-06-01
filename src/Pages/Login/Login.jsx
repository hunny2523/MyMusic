import React from 'react'
import { SpotifyAuthnticationUrl } from '../../Services/spotify'
import { Button } from '@mui/material'
import musicImg from '../../assets/Images/login.png'
import styles from './Login.module.css'


const Login = () => {

    // const login = async () => {
    //     const res = await fetch(SpotifyAuthnticationUrl, {
    //         method: 'GET'
    //     })
    // }

    // const error = (err) => {
    //     console.log('Here');
    //     console.log(err);
    // }

    return (
        <div className={styles.loginBox}>
            <div className={styles.loginCard}>
                <div className={styles.loginPageImage}>
                    <img src={musicImg} alt="" height="100%" width="100%" />
                </div>
                <div>
                    {/* <Button variant="contained" size="large" style={{ backgroundColor: '#FFC600' }} href={SpotifyAuthnticationUrl}>Login With Spotify</Button> */}
                    <Button variant="contained" size="large" style={{ backgroundColor: '#FFC600' }} href={SpotifyAuthnticationUrl}>Login With Spotify</Button>
                </div>
            </div>

        </div>

    )
}

export default Login