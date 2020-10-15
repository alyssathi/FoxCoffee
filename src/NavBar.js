import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import FoxCoffee from './Icons/FoxCoffee.png'
import { Link } from 'react-scroll';

export default function NavBar() {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <AppBar position="fixed" style = {{
            backgroundColor: '#EAE7DCE6',
        }}>
            <Toolbar>
                <Grid container 
                justify= "space-between"
                alignItems="center" >
                    <Grid item>
                        <Button color="inherit"
                       >Shop</Button>  
                    </Grid>
                    <Grid item>
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
                    <Grid item>
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
