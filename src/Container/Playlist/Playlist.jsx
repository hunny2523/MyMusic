import React, { useDeferredValue, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { spotifyApi } from '../../Services/spotify';
import '../../assets/Styles/common.css'
import styles from './Playlist.module.css'
import { useDispatch } from 'react-redux';
import { currentTrackActions } from '../../Store/CurrentTrackSlice';
import styled from '@emotion/styled'
import TrackList from '../../Components/TrackList/TrackList';
import { IconButton, InputBase, TextField } from '@mui/material';
import { Search, SearchOutlined } from '@mui/icons-material';
import { Box, borderBottomColor } from '@mui/system';


const Playlist = ({ userPlaylist }) => {


    const ref = useRef(null);

    const dispatch = useDispatch()

    const handleTrack = (id) => {
        console.log("clicked" + id);

        dispatch(currentTrackActions.addTrackId(id));
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }


    const [searchText, setSearchtext] = useState('');
    const [searchTrack, setSearchTrack] = useState(null);
    // const deferredSearchText = useDeferredValue(searchText);

    // useEffect(() => {
    //     async function getSearchTrack() {
    //         const data = await spotifyApi.searchTracks(deferredSearchText);
    //         console.log(data);
    //         setSearchTrack(data)
    //     }
    //     getSearchTrack();
    // }, [deferredSearchText])

    const handleChange = (e) => {
        let value = e.target.value;
        console.log(value); // Check if the value is being logged correctly
        setSearchtext(value);
        console.log(data);
    };



    const params = useParams();

    const [data, setdata] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const data = await spotifyApi.getPlaylist(params.id)
            setdata(data)
        }
        fetchData()

    }, [params])


    const Container = styled.div`
        background: linear-gradient(to right, var(--primary-color) 0%, rgba(255, 255, 255, 0) 69%), url(${props => props.imageUrl}) no-repeat;
        background-size: 50%;
        background-position: right;
        background-color: var(--primary-color);
        backdrop-filter: blur(10px);
        border: none;
   
        @media screen and (max-width: 768px) {
            background: linear-gradient(0deg, var(--overlay-color), var(--overlay-color)), url(${props => props.imageUrl}) no-repeat;
            background-size: "cover";
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

                        {/* <TextField
                            type='text'
                            sx={{ maxWidth: "20vw" }}
                            id="standard-bare"
                            variant='standard'
                            color="info"
                            value={searchText}
                            onChange={handleChange}
                            className={styles.searchInput}
                            placeholder="Search Track"
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchOutlined className="darkModeIcon" />
                                    </IconButton>
                                ),
                                style: {
                                    color: "var(--text-color)",
                                },
                            }}
                        /> */}

                        <input type="text" value={searchText} onChange={handleChange} />



                    </Container>

                    {searchTrack && (
                        searchTrack?.items?.map((track) => {
                            return (
                                <React.Fragment key={track.id} >
                                    <TrackList data={track} handleTrack={handleTrack} />
                                </React.Fragment>
                            );
                        })
                    )}






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

                    </div>

                </div>
            )}
        </>
    )
}

export default Playlist