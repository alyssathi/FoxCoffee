import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DungTrieu from './Images/SideIMG/TariQ.jpg'

const useStyles = makeStyles({
  background: {
    background: 'url(' + DungTrieu + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: '50%'
  }
})

export default function Landing() {
    const section = {
        height: '120vh',
        textAlign: 'center',
        overflow: 'hidden',
        border: ' transparent solid',
        borderRadius: '0 0 50% 50% / 0 0 15% 15%',
      }
      const classes = useStyles();

    return (
        <Grid container justify= "center"
        alignItems="center"
        style = {section} className = {classes.background}>
        
            <Grid item >
                <Typography variant = 'h1' >Fox Coffee</Typography>
                <Typography variant = 'h2'>Premium Small Batch Roastery</Typography>
                <Typography variant = 'h3'>EST. 2018</Typography>
            </Grid>
        </Grid>
    )
}
