import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CoffeeIMG from './Images/SideIMG/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg'

const useStyles = makeStyles(theme => ({
    section: {
        textAlign: 'center',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    containerStyle: {
        padding: '20px',
        width: '100vw',
        justifyContent: 'center'
     },
    imageStyle: {
        height: 'auto',
        width: '100%',
        [theme.breakpoints.down('sm')]:{
            transform: 'rotate(90deg)',
            width: '70%'
        }
    },
    typographyStyle:{
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.3rem',
            textAlign: 'left',
        }
    }

  }))

export default function AboutUs() {
    const classes = useStyles();

    return (
        <div id = 'AboutUs' className = {classes.section}>
            <Grid container spacing={3} className = {classes.containerStyle} direction= "row">
                <Grid item xs= {12} style = {{display: 'flex'}}>
                    <Typography variant='h4'>
                        About Us
                    </Typography>
                </Grid>
                <Grid item md = {8} >
                    <Typography className={classes.typographyStyle}>
                    Fox Coffee is a speciality coffee roasting company in Geebung, Brisbane. We saw the direction that the coffee industry was heading towards and we couldn't get behind it. On one hand there is the mass producers of the industry who lose the flavors and values of what coffee is, but on the other, there's the coffee connoisseurs who come off more as pretentious snobs. We wanted to see the perfect balance between those two worlds and who better to be the change you want to see than yourself?
                    <br/><br/>
                    Fox Coffee is simplifying and reinventing the whole coffee process and trying to show the world what coffee can be: a flavorful expression of different cultures and ecology but in a more inclusive, less invasive way. You can just savour the taste of a good brew or learn more about the process if you so wish through our blogs, tours in store or any interaction with our staff.
                    <br/><br/>
                    We take tremendous pride in the coffee we source, roast and brew. Be the judge yourself and taste the difference!
                    </Typography>
                </Grid> 
                <Grid item md= {4}>
                        <img className = {classes.imageStyle}src= {CoffeeIMG} />
                </Grid>
            </Grid>
        </div>
    )
}