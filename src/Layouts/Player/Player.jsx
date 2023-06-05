import React, { Fragment, useEffect, useState } from 'react';
import { spotifyApi } from '../../Services/spotify';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useSelector } from 'react-redux';
import { FavoriteBorder, PauseCircleOutline } from '@mui/icons-material';
import { audioElement } from '../../App';
import styles from './Player.module.css';
import { Avatar } from '@mui/material';
import { formatDuration } from '../../Utils/Helper';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Player = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const track = useSelector((state) => state.currentTrack.trackID);
    const [trackData, setTrackData] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const setAudio = () => {
        audioElement.src = trackData?.preview_url;
        audioElement.addEventListener('ended', handleSongEnded);
        audioElement.play();
        setIsPlaying(true);

    };

    useEffect(() => {
        async function fetchSong() {
            console.log(track);
            const trackData = await spotifyApi.getTrack(track);
            console.log(trackData);
            setTrackData(trackData);
        }
        fetchSong();
        return () => {
            audioElement.pause();
            audioElement.src = null;
        };
    }, [track]);

    useEffect(() => {
        setAudio();
    }, [trackData]);

    const handleSongEnded = () => {
        audioElement.currentTime = 0;
        audioElement.play();
    };




    const togglePlay = () => {
        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        setIsPlaying(!isPlaying);
    };

    const playPrevious = async () => {
        const res = await spotifyApi.skipToPrevious();
        console.log(res);
    };

    const playNext = async () => {
        const res = await spotifyApi.skipToNext();
        console.log(res);
    };

    return (
        trackData && (
            <Box className={styles.playerContainer}>
                <div className={styles.AvtarNameWrapper}>

                    <Avatar alt={trackData.name} variant="square" src={trackData?.album?.images[0]?.url} className={styles.PlayerImg} />
                    <div>
                        <h4>{trackData.name}</h4>
                        <div className={styles.artistName}>
                            {trackData.artists.map((artist) => {
                                return (
                                    <Fragment key={artist.id}>
                                        {artist.name + " "}
                                    </Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles.ProgressControlsWrapper}>
                    <div style={{ width: "90%" }} className={styles.progressBarDiv}>
                        <ProgressBar />
                    </div>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {!isMobile ? (
                            <>
                                <IconButton aria-label="previous" onClick={playPrevious} style={{ padding: 0, paddingInline: "0.5em" }}>
                                    <SkipPreviousIcon className="darkModeIcon" />
                                </IconButton>
                                <IconButton aria-label="play/pause" onClick={togglePlay} style={{ padding: 0, paddingInline: "0.5em" }}>
                                    {isPlaying ? (
                                        <PauseCircleOutline sx={{ height: 38, width: 38 }} className="darkModeIcon" />
                                    ) : (
                                        <PlayArrowIcon sx={{ height: 38, width: 38 }} className="darkModeIcon" />
                                    )}
                                </IconButton>
                                <IconButton aria-label="next" onClick={playNext} style={{ padding: 0, paddingInline: "0.5em" }}>
                                    <SkipNextIcon className="darkModeIcon" />
                                </IconButton>
                            </>
                        ) : <IconButton aria-label="play/pause" onClick={togglePlay} style={{ padding: 0, paddingInline: "0.5em" }}>
                            {isPlaying ? (
                                <PauseCircleOutline sx={{ height: 38, width: 38 }} className="darkModeIcon" />
                            ) : (
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} className="darkModeIcon" />
                            )}
                        </IconButton>
                        }

                    </Box>
                </div>
                <div className={styles.DurationFavoriteWrapper}>

                    <p>{formatDuration(trackData.duration_ms)}</p>
                    <FavoriteBorder />
                </div>

            </Box>
        )
    );
};

export default Player;
