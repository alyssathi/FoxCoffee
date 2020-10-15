import React from 'react';
import NavBar from './NavBar';
import Landing from './Landing';
import AboutUs from './AboutUs';
import Learn from './Learn';
import ShopNow from './ShopNow';
import { makeStyles } from '@material-ui/core/styles';
import Contact from './Contact';

const useStyles = makeStyles({
  background: {
    background: 'linear-gradient(to bottom, #FFFFFF, #D8C3A5)',
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
        <ShopNow />
        <Learn />
        <Contact />
    </div>
  )
}

