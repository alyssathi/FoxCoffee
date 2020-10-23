import React from 'react'
import { AppBar, Toolbar, Button, IconButton, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FoxCoffee from './Icons/FoxCoffee.png'
import { HashLink } from 'react-router-hash-link';


const useStyles = makeStyles(theme => ({
    appLarge: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    appSmall:  {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    routerLink: {
        color: 'black',
        textDecoration: 'none'
    }
}))

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default function NavBar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" style = {{
            backgroundColor: '#EAE7DCE6',
        }}>
            <Toolbar>
                <Grid container 
                justify= "space-between"
                alignItems="center" >
                    <Grid item className={classes.appSmall}> 
                    <HashLink
                        smooth
                        to="/home/#Landing"
                        >
                        <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src={FoxCoffee} alt = 'FoxCoffee Logo' style = {{height: "70px" }}/>
                    </IconButton>
                    </HashLink>
                    </Grid>
                    <Grid item>
                        <HashLink className={classes.routerLink} smooth to = '/shop/#'>
                        <Button color="inherit"
                       >Shop</Button> 
                        </HashLink>
                    </Grid>
                    <Grid item className= {classes.appLarge}>
                    <HashLink smooth 
                            to= '/home/#AboutUs'
                            scroll={el => scrollWithOffset(el)}
                            className={classes.routerLink}
                        >
                        <Button>
                        About Us
                        </Button>
                    </HashLink>
                    </Grid>
                    <Grid item className= {classes.appLarge}>
                    <HashLink
                        to="/home/#Landing"
                        smooth
                        >
                        <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src={FoxCoffee} alt = 'FoxCoffee Logo' style = {{height: "70px" }}/>
                    </IconButton>
                    </HashLink>
                    </Grid>
                    <Grid item className={classes.appLarge}>
                    <HashLink
                        to="/home/#Learn"
                        smooth
                        scroll={el => scrollWithOffset(el)}
                        className={classes.routerLink}
                        >
                        <Button>
                        Learn
                        </Button>
                    </HashLink>
                    </Grid>
                    <Grid item>
                    <HashLink
                        to="/home/#Contact"
                        smooth
                        scroll={el => scrollWithOffset(el)}
                        className={classes.routerLink}
                        >
                        <Button>
                        Contact
                        </Button>
                    </HashLink>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
