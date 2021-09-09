import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import Footer from '../../footer/Footer';
import Navigation from '../header/Navigation';
import RightBar from './RightBar';
import SideBar from './SideBar';
const styles = makeStyles((theme) => ({
    hideItem: {
        display: "block",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
}))
const Body = () => {
    const classes = styles()
    return (
        <>
            <div className="container">
                <Navigation />
                <Grid container spacing={2}>
                    <Grid item className={classes.hideItem} sm={3} md={3} lg={3}>
                        <SideBar />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <RightBar />
                        <Footer />
                    </Grid>
                </Grid>
            </div>

        </>
    )
}

export default Body;
