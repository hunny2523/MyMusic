import React from 'react';
import { Grid } from '@mui/material';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/Main/Main';
import Sidebar from '../../Layouts/Sidebar/Sidebar';



const Home = () => {
    return (
        <Grid container direction="row" minWidth="100vw">
            <Grid item xs={12} lg={2} sm={3}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} lg={10} md={9} >
                <Grid container direction="column" minHeight="100vh">
                    <Grid item >
                        <Header />
                    </Grid>
                    <Grid item flexGrow={1}>
                        <Main />
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default Home;