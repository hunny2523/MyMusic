import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { spotifyApi } from '../../Services/spotify';
import '../../assets/Styles/common.css'
import CardUI from '../../Components/Card/CardUI';
import { useDispatch } from 'react-redux';
import { currentTrackActions } from '../../Store/CurrentTrackSlice';
import Song from '../../Components/Player/Player';
import styles from './Album.module.css'

import styled from '@emotion/styled'
import TrackList from '../../Components/TrackList/TrackList';
import { Box, Grid } from '@mui/material';
import ShowArtists from '../../Components/showArtists/ShowArtists';
import { MusicNote } from '@mui/icons-material';


const Album = () => {
    const ref = useRef(null);

    const dispatch = useDispatch()

    const handleTrack = (id) => {
        console.log("clicked" + id);
        dispatch(currentTrackActions.addTrackId(id));
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }



    const params = useParams();

    const [data, setdata] = useState(null)

    useEffect(() => {

        async function fetchData() {
            const data = await spotifyApi.getAlbum(params.id)
            setdata(data)
            console.log(data);
        }
        fetchData()

    }, [])



    return (

        data &&

        <Grid container sx={{ height: "100%" }}>

            <Grid item md={5} xs={12} sx={{ alignSelf: "center" }}>
                <div className={styles.ImgWrapper}>
                    <img src={data?.images[0]?.url} alt={data.name} width="100%" height="100%" />
                </div>
            </Grid>
            <Grid item md={7} xs={12} >

                <div className={styles.AlbumTextWrapper}>
                    <h2 className={styles.playlistNameHeading}>{data.name}</h2>

                    <h3 >{data.label} {data?.tracks?.total} Songs</h3>

                </div >
                < div className={styles.tracksListContainer} ref={ref} >

                    {data?.tracks?.items?.map((track) => {
                        return (
                            <React.Fragment key={track.id} >
                                <TrackList data={track} handleTrack={handleTrack} />
                            </React.Fragment>
                        );
                    })}

                </ div>




            </Grid>





        </Grid>




    )
}

export default Album