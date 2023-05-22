import React from 'react'
import { spotifyApi } from '../../Services/spotify'

const Main = () => {

    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
        function (data) {
            console.log('Artist albums', data);
        },
        function (err) {
            console.error(err);
        }
    );



    return (
        <div>{

            <button >hello</button>
        }</div>
    )
}

export default Main