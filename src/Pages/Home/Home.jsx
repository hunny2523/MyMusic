import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import Main from '../../Layout/Main/Main';
import Header from '../../Layout/Header/Header';


const Home = () => {
    return (
        <Grid container direction="row" minWidth="100vw">
            <Grid item xs={12} sm={3}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} sm={9}>
                <Grid container direction="column" minHeight="100vh">
                    <Grid item >
                        <Header />
                    </Grid>
                    <Grid item flexGrow={1}>
                        <Main />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
