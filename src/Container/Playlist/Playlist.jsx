import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { spotifyApi } from '../../Services/spotify';
import '../../assets/Styles/common.css'
import styles from './Playlist.module.css'
import ShowTrack from '../../Components/ShowTrack/ShowTrack';
import CardUI from '../../Components/Card/CardUI';
import { useDispatch } from 'react-redux';
import { currentTrackActions } from '../../Store/CurrentTrackSlice';
import Song from '../../Components/Song/Song';



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

    const containerStyle = {
        background: ` linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 69%), url(${data?.images[0]?.url}) no-repeat`,
        backgroundSize: "cover",
        width: "40vw",
        height: "100%",
        // border: "solid 1px #000",
        backdropFilter: "blur(10px)",
        border: "none",
        // objectPosition: "center",
        // backgroundPosition: "center"
    };



    return (
        <>
            {data && (

                <div className="d-flex-column">

                    <div className={styles.playlistHeader}>
                        <div className={styles.headertext}>
                            <h1 className={styles.playlistNameHeading}>{data.name}</h1>
                            <h2 >{data.description}</h2>
                            <h3>{data?.tracks?.total} Songs</h3>
                            <h3>Followed By {data?.followers?.total}</h3>
                        </div>
                        <div style={containerStyle}>
                        </div>
                    </div>

                    <div className="d-flex-row" ref={ref}>
                        <div className={styles.tracksContainer}>

                            {data?.tracks?.items?.map((track) => {
                                return (
                                    <React.Fragment key={track.track.id}>
                                        <ShowTrack data={track.track} handleTrack={handleTrack} />
                                    </React.Fragment>
                                );
                            })}

                        </div>
                        <div style={{ flex: 1 }}>
                            <Song />
                        </div>
                    </div>


                </div>
            )}
        </>
    )
}

export default Playlist
