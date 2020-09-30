import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import Coffee from './Images/SideIMG/Coffee.png'

export default function Landing() {
    const section = {
        height: '100vh',
        textAlign: 'center',
        zIndex: 1,
        overflow: 'hidden',
      }

    const imgStyle = {
        transform: 'rotate(250deg) scale(0.7)',
        position: 'absolute',
        top: '-160%',
        left: '50px',
        overflow: 'hidden'
    }
    return (
        <Grid container justify= "center"
        alignItems="center"
        style = {section}>
            <Grid item style = {imgStyle}>
            <img src={Coffee} alt = "coffee beans spilling across page" 
            /> 
            </Grid>
            <Grid item >
                <Typography variant = 'h1' >Fox Coffee</Typography>
                <Typography variant = 'h2'>Premium Small Batch Roastery</Typography>
                <Typography variant = 'h3'>EST. 2018</Typography>
            </Grid>
        </Grid>
    )
}
