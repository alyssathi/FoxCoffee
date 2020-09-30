import React from 'react';
import { Grid } from '@material-ui/core';
import NavBar from './NavBar';
import Landing from './Landing';
import AboutUs from './AboutUs'
import coffee from './Images/SideIMG/Coffee.png'

export default function App() {
  return (
    <Grid container direction = "column" style = {{background: 'linear-gradient(to bottom, #FFFFFF, #EAE7DC)', overflow: 'hidden'}}>
      <Grid item >
        <NavBar />
      </Grid>
      <Grid item>
        <Landing  />
      </Grid>
      <Grid item>
        <AboutUs />
      </Grid>
    </Grid>
  )
}

