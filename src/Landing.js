import React from 'react';
import { Grid, Typography } from '@material-ui/core'

export default function Landing() {
    const section = {
        height: '100vh',
        textAlign: 'center',
        overflow: 'hidden',
      }

    return (
        <Grid container justify= "center"
        alignItems="center"
        style = {section}>
        
            <Grid item >
                <Typography variant = 'h1' >Fox Coffee</Typography>
                <Typography variant = 'h2'>Premium Small Batch Roastery</Typography>
                <Typography variant = 'h3'>EST. 2018</Typography>
            </Grid>
        </Grid>
    )
}
