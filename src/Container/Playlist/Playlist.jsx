import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { spotifyApi } from '../../Services/spotify';
import '../../assets/Styles/common.css'
import styles from './Playlist.module.css'
import CardUI from '../../Components/Card/CardUI';
import { useDispatch } from 'react-redux';
import { currentTrackActions } from '../../Store/CurrentTrackSlice';
import Song from '../../Components/Player/Player';
import { createTheme } from '@mui/material';
// import styled from 'styled-components'
import styled from '@emotion/styled'
import TrackList from '../../Components/TrackList/TrackList';
// import {StyledComponent} from '@emotion/styled'

const Playlist = () => {
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
            const data = await spotifyApi.getPlaylist(params.id)
            setdata(data)
        }
        fetchData()

    }, [])

    // const containerStyle = {
    //     background: `linear-gradient(to right, var(--primary-color) 0%, rgba(255, 255, 255, 0) 69%), url(${data?.images[0]?.url}) no-repeat`,
    //     backgroundSize: "50%",
    //     backgroundPosition: "right",
    //     backgroundColor: "var(--primary-color)",
    //     backdropFilter: "blur(10px)",
    //     border: "none",

    // };

    const Container = styled.div`
        background: linear-gradient(to right, var(--primary-color) 0%, rgba(255, 255, 255, 0) 69%), url(${props => props.imageUrl}) no-repeat;
        background-size: 50%;
        background-position: right;
        background-color: var(--primary-color);
        backdrop-filter: blur(10px);
        border: none;
   
        @media screen and (max-width: 768px) {
            background: linear-gradient(0deg, var(--shadow-color), var(--shadow-color)), url(${props => props.imageUrl}) no-repeat;
    
            background-size: 100%;


        }
      `;

    return (
        <>
            {data && (

                <div className="d-flex-column">

                    <Container className={styles.playlistHeader} imageUrl={data?.images[0]?.url} >
                        <div className={styles.headertext}>
                            <h1 className={styles.playlistNameHeading}>{data.name}</h1>
                            <h2 >{data.description}</h2>
                            <h3>{data?.tracks?.total} Songs</h3>
                            <h3>Followed By {data?.followers?.total}</h3>
                        </div>
                    </Container>

                    <div className="d-flex-row" ref={ref}>
                        <div className={styles.tracksContainer}>

                            {data?.tracks?.items?.map((track) => {
                                return (
                                    <React.Fragment key={track.track.id} >
                                        <TrackList data={track.track} handleTrack={handleTrack} />
                                    </React.Fragment>
                                );
                            })}

                        </div>
                        {/* <div style={{ flex: 1 }}>
                            <Song />
                        </div> */}
                    </div>

                </div>
            )}
        </>
    )
}

export default Playlist