import React from 'react';
import NavBar from './NavBar';
import Shop from './Shop/Shop';
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


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
      <Router>
        <NavBar />
        <Route path = '/home' exact component ={Home} />
        <Route path='/shop' component = {Shop} />
      </Router>
        
    </div>
  )
}

