import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { spotifyApi } from '../../Services/spotify'
import TrackList from '../../Components/TrackList/TrackList';
import { currentTrackActions } from '../../Store/CurrentTrackSlice';
import { Grid } from '@mui/material';
import styles from './Artist.module.css'
import { useDispatch } from 'react-redux';

const Artist = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const [artist, setArtist] = useState(null);
    const [artistTracks, setArtistTracks] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const artist = await spotifyApi.getArtist(params.id);
            const artistTracks = await spotifyApi.getArtistTopTracks(params.id, "IN");
            setArtist(artist);
            console.log(artist);
            setArtistTracks(artistTracks);
            console.log(artistTracks);
        }
        fetchData()
    }, [])

    let playlistTrackIDQueue;
    if (artistTracks) {
        playlistTrackIDQueue = artistTracks.tracks.map((track) => track.id)
    }

    const handleTrack = (id) => {
        dispatch(currentTrackActions.addTrackQueue(playlistTrackIDQueue))
        dispatch(currentTrackActions.addTrackId(id));
    }


    return (
        artist &&
        <Grid container sx={{ height: "100%" }}>

            <Grid item md={5} xs={12} sx={{ alignSelf: "center" }} className={styles.ImageTextWrapper}>
                <div className={styles.ImgWrapper}>
                    <img src={artist?.images[0]?.url} alt={artist.name} width="100%" height="100%" />
                </div>
                <div className={styles.ArtistTextWrapper}>
                    <div>
                        <h2 className={styles.playlistNameHeading}>{artist.name}</h2>
                        <h3>
                            {artist.followers.total}
                        </h3>
                    </div>
                    {/* <h3 > {data?.tracks?.total} Songs</h3> */}

                </div >
            </Grid>
            <Grid item md={7} xs={12} >

                < div className={styles.tracksListContainer}  >
                    {artistTracks && <>

                        {artistTracks?.tracks?.map((track) => {
                            return (
                                <React.Fragment key={track.id} >
                                    <TrackList data={track} handleTrack={handleTrack} />
                                </React.Fragment>
                            );
                        })}
                    </>}

                </ div>

            </Grid>

        </Grid>


    )
}

export default Artist
