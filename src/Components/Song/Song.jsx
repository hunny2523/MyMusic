import React, { useEffect, useState } from 'react'
import { spotifyApi } from '../../Services/spotify'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useSelector } from 'react-redux';
import { PauseCircleOutline } from '@mui/icons-material';
import { audioElement } from '../../App';

const Song = () => {

    let audio = null;
    const track = useSelector((state) => state.currentTrack.trackID)

    console.log(track);
    const [trackData, settrackData] = useState(null)
    // const [audioData, settrackData] = useState(null)

    const setAudio = () => {
        audioElement.src = trackData?.preview_url;
        audioElement.play()
    }
    useEffect(() => {
        async function fetchSong() {
            const trackdata = await spotifyApi.getTrack(track);
            settrackData(trackdata)
            console.log(trackData);

        }
        fetchSong();
        return () => {
            audioElement.pause();
            audioElement.src = null
        }
    }, [track])

    useEffect(() => {
        setAudio();
    }, [trackData])



    const [isPlaying, setIsPlaying] = useState(false);
    // const handleSongEnded = () => {
    //     setIsPlaying(false);
    //     console.log("run");
    //     audioElement.currentTime = 0; // Reset the audio playback to the beginning
    // };

    // audioElement.addEventListener('ended', handleSongEnded);
    const togglePlay = () => {
        console.log(isPlaying);

        if (!isPlaying) {
            console.log('isplaying');
            audioElement.pause()
            setIsPlaying(!isPlaying);
        } else {
            console.log('isnotplaying');
            // audioElement.src = trackData.preview_url;
            audioElement.play()
            setIsPlaying(!isPlaying);
        }

        // setIsPlaying((prevState) => !prevState);
    };

    const theme = useTheme();



    return (

        trackData && (
            <>

                <Card sx={{ width: "95%", height: "95%", margin: "10px auto", backgroundColor: "var(--primary-color)", color: "var(--text-color)" }}>
                    <CardMedia
                        component="img"
                        sx={{ maxWidth: "100%" }}
                        image={trackData?.album?.images[0]?.url}
                        alt={trackData.name}
                    />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" >
                            {trackData.name}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            {trackData.artists[0].name}
                        </Typography>
                    </CardContent>


                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon className="darkModeIcon" /> : <SkipPreviousIcon className="darkModeIcon" />}
                        </IconButton>
                        <IconButton aria-label="play/pause" onClick={togglePlay}>
                            {!isPlaying ? (
                                <PauseCircleOutline sx={{ height: 38, width: 38 }} className="darkModeIcon" />
                            ) : (
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} className="darkModeIcon" />
                            )}
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon className="darkModeIcon" /> : <SkipNextIcon className="darkModeIcon" />}
                        </IconButton>
                        {/* <audio src={trackData.preview_url} controls={isPlaying}></audio> */}
                    </Box>
                </Card>

            </>
        )

    );
}

export default Song
