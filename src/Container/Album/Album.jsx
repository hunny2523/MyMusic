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
import { Box } from '@mui/material';
import ShowArtists from '../../Components/showArtists/ShowArtists';


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



    // const Container = styled.div`
    //     background:  url(${props => props.imageUrl}) no-repeat;
    //     background-size: cover;
    //     background-position: right;
    //     background-color: var(--primary-color);
    //     backdrop-filter: blur(10px);
    //     border: none;
    //     flex: 1;

    //     @media screen and (max-width: 768px) {
    //         background: linear-gradient(0deg, var(--shadow-color), var(--shadow-color)), url(${props => props.imageUrl}) no-repeat;

    //         background-size: 100%;


    //     }
    //   `;

    return (
        <>
            {data && (

                <Box sx={{ display: "flex", padding: "2em" }}>


                    <div className={styles.imageTextContainer} >
                        <div className={styles.ImgWrapper}>
                            <img src={data?.images[0]?.url} alt={data.name} width="100%" height="100%" />
                        </div>
                        <div className={styles.AlbumTextWrapper}>
                            <h2 className={styles.playlistNameHeading}>{data.name}</h2>
                            <h3 >{data.label}</h3>
                            <h4>{data?.tracks?.total} Songs</h4>
                            {/* <h3>Followed By {data?.followers?.total}</h3> */}
                        </div>
                    </div>


                    <div className={styles.tracksArtistContainer} ref={ref}>

                        {data?.tracks?.items?.map((track) => {
                            return (
                                <React.Fragment key={track.id} >
                                    <TrackList data={track} handleTrack={handleTrack} />
                                </React.Fragment>
                            );
                        })}
                        <ShowArtists />

                    </div>



                </Box>
            )}
        </>
    )
}

export default Album