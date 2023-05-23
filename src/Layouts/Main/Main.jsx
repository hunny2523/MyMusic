import React from 'react'
import { spotifyApi } from '../../Services/spotify'
import MyPlaylist from '../../Components/MyPlaylist/MyPlaylist';

const Main = () => {

    // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    //     function (data) {
    //         console.log('Artist albums', data);
    //     },
    //     function (err) {
    //         console.error(err);
    //     }
    // );



    return (
        <div>{
            <MyPlaylist />
        }</div>
    )
}

export default Main