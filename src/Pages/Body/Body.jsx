import React, { useContext, useEffect, useState } from 'react';
import { Grid, Hidden } from '@mui/material';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/Main/Main';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchFeaturedPlaylists, fetchNewReleases } from '../../Store/browseSlice';
import { ThemeContext } from '../../Context/ThemeContext';
import Player from '../../Components/Player/Player';
import ScrollToTopButton from '../../Layouts/ScrollToTop/ScrollToTop';
import NavbarFooter from '../../Layouts/NavbarFooter/NavbarFooter';
import { fetchFavoriteTracks } from '../../Store/Favorites';
import { fetchUserPlaylists } from '../../Store/userPlaylists';



const Body = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const track = useSelector((state) => state.currentTrack.trackID);


    useEffect(() => {
        dispatch(fetchFeaturedPlaylists())
        dispatch(fetchNewReleases())
        dispatch(fetchCategories())
        dispatch(fetchFavoriteTracks());
        if (user) {
            dispatch(fetchUserPlaylists(user?.id))
        }
    }, [dispatch, user])

    const { theme } = useContext(ThemeContext);

    return (
        <Grid container direction="row" Height="100vh" className={`container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <Hidden smDown>
                <Grid item lg={2} md={3} sm={3.5} height="100vh">
                    <Sidebar />
                </Grid>
            </Hidden>
            <Grid item xs={12} md={9} lg={10} sm={8.5} sx={{ overflow: "auto" }} maxHeight="100vh">
                <Header />
                <Main />
            </Grid>
            <Hidden smUp>
                <NavbarFooter />
            </Hidden>
            {track &&
                <Player />
            }
        </Grid>

    );

};

export default Body;