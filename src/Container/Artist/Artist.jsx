import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { spotifyApi } from '../../Services/spotify'

const Artist = () => {

    const params = useParams();

    const [artist, setArtist] = useState(null);
    const [artistTracks, setArtistTracks] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const artist = await spotifyApi.getArtist(params.id);
            const artistTracks = await spotifyApi.getArtistTopTracks(params.id, "IN");
            setArtist(artist);
            setArtistTracks(artistTracks);
        }
        fetchData()
    }, [])
    return (
        artist && <>
            {console.log(artist)}
            {console.log(artistTracks)}
        </>

    )
}

export default Artist
