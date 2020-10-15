import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FoxCoffee from './Icons/FoxCoffee.png'
import { Link } from 'react-scroll';


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
    }
}))

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
                    <Link
                        to="Landing"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src={FoxCoffee} alt = 'FoxCoffee Logo' style = {{height: "70px" }}/>
                    </IconButton>
                    </Link>
                    </Grid>
                    <Grid item>
                        <Button color="inherit"
                       >Shop</Button>  
                    </Grid>
                    <Grid item className= {classes.appLarge}>
                    <Link
                            to="AboutUs"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset= {-75}
                        >
                        <Button>
                        About Us
                        </Button>
                    </Link>
                    </Grid>
                    <Grid item className= {classes.appLarge}>
                    <Link
                        to="Landing"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src={FoxCoffee} alt = 'FoxCoffee Logo' style = {{height: "70px" }}/>
                    </IconButton>
                    </Link>
                    </Grid>
                    <Grid item className={classes.appLarge}>
                    <Link
                        to="Learn"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset= {-95}
                        >
                        <Button>
                        Learn
                        </Button>
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link
                        to="Contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset= {-75}
                        >
                        <Button>
                        Contact
                        </Button>
                    </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
