import * as React from 'react';
import { Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


export default function CardUI({ name, description, handleClick, images, type, artists }) {
    // const theme = useTheme();

    return (
        <>

            <CardMedia
                component="img"
                sx={{ width: "12em", height: "12em", borderRadius: "15px", boxShadow: "0px 0px 6px 5px var(--primary-color)" }}
                image={images.url}
                alt={name}
            />


            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent >
                    <Typography component="div" variant="title" sx={{ maxWidth: "12em" }} >
                        {name}
                    </Typography>
                    {/* <Typography variant="body" color="text.secondary" component="div" textOverflow="ellipsis">
                        {description}
                    </Typography> */}
                    <Typography variant='body2' color="grey">
                        {artists && artists.map((artist) => {
                            return artist.name + " "
                        })}
                    </Typography>
                </CardContent>
            </Box>
        </>
    );
}