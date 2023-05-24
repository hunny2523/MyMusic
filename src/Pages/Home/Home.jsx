import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/Main/Main';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { fetchCategories, fetchFeaturedPlaylists, fetchNewReleases } from '../../Store/browseSlice';



const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFeaturedPlaylists())
        dispatch(fetchNewReleases())
        dispatch(fetchCategories())
    }, [dispatch])





    return (
        <Grid container direction="row" >
            <Grid item xs={12} lg={2} sm={3}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} lg={10} sm={9} >
                <Header />
                <Main />
            </Grid>
        </Grid >
    );

};

export default Home;