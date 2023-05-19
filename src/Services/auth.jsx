import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();


const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
const authEndpoint = 'https://accounts.spotify.com/authorize';

export const SpotifyAuthnticationUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`;



export const setAccessToken = () => {
    const hash = window.location.hash
    if (hash) {

        let token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        spotifyApi.setAccessToken(token);
        localStorage.setItem("token", token)
        return token;

    }
};


export const fetchUserProfile = async () => {
    try {
        const response = await spotifyApi.getMe();
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch user profile');
    }
};

