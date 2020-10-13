import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CoffeeIMG from './Images/SideIMG/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg'
import NathanDumlaoRotated from './Images/SideIMG/NathanDumlaoRotated.jpg'

const useStyles = makeStyles(theme => ({
    section: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]:{
            textAlign: 'center'
        }
      },
    containerStyle: {
        width: '100vw',
        justifyContent: 'center'
     },
    BGimageStyle: {
        height: 'auto',
        width: '100%',
        background: 'url(' + CoffeeIMG + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
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
        <div className = {classes.section}>
            <Grid container spacing={5} className = {classes.containerStyle} direction= "row">
                <Grid item xs= {12} md= {4} className = {classes.BGimageStyle}>
                </Grid>
                <Grid item xs= {12} md= {8}>
                    <div>
                    <Typography variant='h4'>
                        Learn your grinds
                    </Typography>
                    <br></br>
                    <Typography className={classes.typographyStyle}>
                    <div><b>All about beans</b></div>
                    <div>
                    Arabica and robusta are the two most popular beans used.

                    Arabica beans produce a softer and sweeter flavour with higher acidity caused by a higher sugar and lipid content. 

                    Robusta beans produce a full-bodied, stronger and harsher taste containing twice as much caffeine. This type of bean is often used in espresso blends as it produces a richer crema.
                    </div>
                    <br></br>
                    <div><b>The right roast</b></div>
                    <div>Beans are roasted for varying amounts of time, impacting the way the sugars and fats in the coffee bean degrade and thus shaping the flavour. A shorter roast time produces a lighter roast, which tends to have a cleaner taste and is more acidic. As the beans absorb heat, they become darker and oils appear on the surface. Darker roasts are less acidic, with a stronger, heavier flavour.</div>
                    <br></br>
                    <div><b>The daily grind</b></div>
                    <div>The coarseness of the bean grind is yet another factor that plays into the coffee's taste. If it is too coarse, you'll end up with weak cup of coffee. A finer grind leads to stronger coffee, but if it is too fine it may end up tasting bitter.

                    The right grind is also determined by the kind of coffee you are preparing. A finer grind is more suitable for espresso, but cafetiere coffee needs a coarser grind, as the flavour is extracted more slowly.</div>
                    <div>
                        <a href= "https://imbibe.com/news/basics-coffee-simple-guide-step-game/">Source and more information</a>
                    </div>
                    </Typography>
                    </div>
                    
                </Grid> 
            </Grid>
        </div>
    )
}