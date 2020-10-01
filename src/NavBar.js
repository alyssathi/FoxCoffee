import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Grid } from '@material-ui/core'
import FoxCoffee from './Icons/FoxCoffee.png'

export default function NavBar() {
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
                        <Button color="inherit"
                        >About Us</Button>
                    </Grid>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src={FoxCoffee} alt = 'FoxCoffee Logo' style = {{height: "70px" }}/>
                    </IconButton>
                    <Grid item>
                        <Button color="inherit"
                        >Learn</Button>
                    </Grid>
                    <Grid item>
                        <Button color="inherit"
                        >Contact</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
