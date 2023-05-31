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
import TrackList from '../TrackList/TrackList';
import ProgressBar from './Components/ProgressBar/ProgressBar';
const Player = () => {

    const token = useSelector((state) => state.auth.accessToken)

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

    const handleSongEnded = async () => {
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
                <Avatar alt={trackData.name} src={trackData?.album?.images[0]?.url} />
                <div>
                    <h5>{trackData.name}</h5>
                    <div>
                        {trackData.artists.map((artist) => {
                            return (
                                <Fragment key={artist.id}>
                                    <span>{artist.name} </span>
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
                <ProgressBar />
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous" onClick={playPrevious}>
                        <SkipPreviousIcon className="darkModeIcon" />
                    </IconButton>
                    <IconButton aria-label="play/pause" onClick={togglePlay}>
                        {isPlaying ? (
                            <PauseCircleOutline sx={{ height: 38, width: 38 }} className="darkModeIcon" />
                        ) : (
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} className="darkModeIcon" />
                        )}
                    </IconButton>
                    <IconButton aria-label="next" onClick={playNext}>
                        <SkipNextIcon className="darkModeIcon" />
                    </IconButton>
                </Box>
                <p>{formatDuration(trackData.duration_ms)}</p>
                <FavoriteBorder />

            </Box>
        )
    );
};

export default Player;
