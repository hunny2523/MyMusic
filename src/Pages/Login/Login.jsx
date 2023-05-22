import React from 'react'
import { SpotifyAuthnticationUrl } from '../../Services/spotify'

const Login = () => {
    return (
        <div>
            <h2>Login with Spotify</h2>
            <a href={SpotifyAuthnticationUrl}>Login</a>
        </div>
    )
}

export default Login
