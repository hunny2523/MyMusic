import React, { useContext, useEffect, useState } from 'react';
import { Grid, Hidden } from '@mui/material';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/Main/Main';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { fetchCategories, fetchFeaturedPlaylists, fetchNewReleases } from '../../Store/browseSlice';
import { ThemeContext } from '../../Context/ThemeContext';
import Player from '../../Components/Player/Player';
import ScrollToTopButton from '../../Layouts/ScrollToTop/ScrollToTop';
import NavbarFooter from '../../Layouts/NavbarFooter/NavbarFooter';
import { fetchFavoriteTracks } from '../../Store/Favorites';



const Body = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFeaturedPlaylists())
        dispatch(fetchNewReleases())
        dispatch(fetchCategories())
        dispatch(fetchFavoriteTracks());
    }, [dispatch])
    const { theme } = useContext(ThemeContext);

    return (
        <Grid container direction="row" maxHeight="100vh" className={`container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
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
            <Player />
        </Grid>

    );

};

export default Body;