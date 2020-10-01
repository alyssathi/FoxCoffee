import React from 'react';
import NavBar from './NavBar';
import Landing from './Landing';
import AboutUs from './AboutUs';
import { makeStyles } from '@material-ui/core/styles'
import CoffeeRotated from './Images/SideIMG/CoffeeRotated.png'

const useStyles = makeStyles({
  background: {
    background: 'url(' + CoffeeRotated + '), linear-gradient(to bottom, #FFFFFF, #EAE7DC)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }
})

export default function App() {

  const classes = useStyles();

  return (
    <div 
    className = {classes.background}
    >
        <NavBar />
        <Landing  />
        <AboutUs />
    </div>
  )
}

