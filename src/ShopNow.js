import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CoffeeIMG from './Images/SideIMG/nathan-dumlao-6VhPY27jdps-unsplash.jpg'

const useStyles = makeStyles(theme => ({
    section: {
        overflow: 'hidden',
        display: 'flex',
        height: '60vh',
        alignItems: 'center',
        justifyContent: 'center',
      },
    containerStyle: {
        margin: '20px 0 20px 0',
        width: '80vw',
        justifyContent: 'center',
        boxShadow: '0px 0px 10px 10px #c2b39f',
        borderRadius: '1rem',
        background: 'linear-gradient(to bottom, #EAE7DCE6, #D8C3A5)',
     },
     contentStyle: {
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        [theme.breakpoints.down('xs')]:{
            textAlign: 'center',
            background: 'url(' + CoffeeIMG + ')',
            borderRadius: '1rem',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
     },
    BGimageStyle: {
        height: 'auto',
        width: '100%',
        background: 'url(' + CoffeeIMG + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0 1rem 1rem 0',
        [theme.breakpoints.down('xs')]:{
            display: 'none',
        }
    },
    typographyStyle:{
        margin: '30px 0 30px 0',
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.3rem',
            textAlign: 'left',
        },
        [theme.breakpoints.down('xs')]:{
            color: 'white'
        }
    
    }
  }))

export default function AboutUs() {
    const classes = useStyles();

    return (
        <div className = {classes.section}>
            <Grid container  className = {classes.containerStyle} direction= "row">
                <Grid item xs= {12} sm ={6} className= {classes.contentStyle}>
                    <Typography variant='h4'>
                       Shop Online
                    </Typography>
                    <Typography className={classes.typographyStyle}>
                    Freshly roasted coffee beans right at your door step. Take a look at our selection and order today.
                    </Typography>
                    <Button size= 'large'>Shop Now</Button>
                </Grid>
                <Grid item sm = {6} className= {classes.BGimageStyle}>
                </Grid>
            </Grid>
        </div>
    )
}