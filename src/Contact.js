import React from 'react';
import { Grid, TextField, FormControl, InputLabel, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NathanDumlaoCircle from './Images/SideIMG/NathanDumlaoCircle.jpg'

const useStyles = makeStyles(theme => ({
    section: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem 2rem 0',
        [theme.breakpoints.down('md')]:{
            padding: '1rem',
            textAlign: 'center'
        }
      },
    textareaStyle: {
        width: '100%',
        resize: 'none',
        height: '100px',
        fontFamily: 'Roboto',
        marginTop: '1rem'
    },
     BGimageStyle: {
        height: 'auto',
        width: '100%',
        background: 'url(' + NathanDumlaoCircle + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    },
    formStyle:{
        background: 'linear-gradient(to bottom, #FFFFFF, #EAE7DCE6)',
        borderRadius: '1rem'

    },
    typographyStyle:{
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.3rem',
            textAlign: 'left',
        }
    }

  }))

export default function Contact() {
    const classes = useStyles();

    return (
        <div id = 'Contact' className={classes.section}>
            <Grid container spacing = {3} >
                <Grid item xs= {12}>
                <Typography variant = 'h4'>Contact Us</Typography>
                </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={classes.typographyStyle}>
                <div>
                Find us at our Retail Espresso Coffee House and Bar:
                </div>
                <div><b>
                3 Ellison Rd Geebung,
                Brisbane, Australia, 4034
                </b></div>
                <div>
                Monday - Sunday: 6:30am - 2pm
                </div>
                <br></br>
                <div>
                Or give us a call here!
                </div>
                <div>
                📞 (07) 3216 2318
                </div>
                </Typography>
            </Grid>
            <Grid xs={12} md={6} item className={classes.formStyle}>
                <Typography variant='h5'>Send Us a Message</Typography>
                <form >
                    <TextField label="Full Name"
                    placeholder="Johnny Smith"
                    required
                    fullWidth></TextField>
                    <TextField label="E-mail Address"
                    placeholder="johnsmith@yourmail.com"
                    fullWidth
                    required></TextField>
                    <textarea className={classes.textareaStyle}placeholder= 'Your message here'
                    required></textarea>
                    <Button fullWidth type = 'submit'>Send</Button>
                </form>
            </Grid>
        </Grid>
        </div>       
    )
}
