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

const Song = () => {

    let audio = null;
    const track = useSelector((state) => state.currentTrack.trackID)
    console.log(track);
    const [trackData, settrackData] = useState(null)
    // const [audioData, settrackData] = useState(null)

    useEffect(() => {
        async function fetchSong() {
            const trackdata = await spotifyApi.getTrack(track);
            settrackData(trackdata)
            console.log(trackData);
        }
        fetchSong();
        return () => {
            audio = null;
        }
    }, [track])


    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        console.log(isPlaying);
        if (!audio) {
            console.log("here");
            audio = new Audio(trackData.preview_url);
            console.log(audio + trackData.preview_url);
            audio.addEventListener('ended', handleSongEnded);
        }

        if (isPlaying) {
            // audio.pause();
            console.log('isplaying');
            setIsPlaying(!isPlaying);
        } else {
            // audio.play();
            console.log('isnotplaying');

            setIsPlaying(!isPlaying);
        }

        // setIsPlaying((prevState) => !prevState);
    };

    const theme = useTheme();

    const handleSongEnded = () => {
        setIsPlaying(false);
        audio.currentTime = 0; // Reset the audio playback to the beginning
    };


    return (

        trackData && (
            <>

                <Card sx={{ width: "95%", height: "95%", margin: "10px auto" }}>
                    <CardMedia
                        component="img"
                        sx={{ maxWidth: "100%" }}
                        image={trackData?.album?.images[0]?.url}
                        alt={trackData.name}
                    />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {trackData.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {trackData.artists[0].name}
                        </Typography>
                    </CardContent>


                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause" onClick={togglePlay}>
                            {!isPlaying ? (
                                <PauseCircleOutline sx={{ height: 38, width: 38 }} />
                            ) : (
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            )}
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                        <audio style={{ display: "none" }} src={trackData.preview_url} controls={isPlaying}></audio>
                    </Box>
                </Card>

            </>
        )

    );
}

export default Song
