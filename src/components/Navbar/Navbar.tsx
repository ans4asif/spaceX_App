import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import astro from '../../images/astronaut2.jpg'
import spacex from '../../images/spacex2.png'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacexLogo:{
      width:'400px',
      display:'block',
      textAlign:'center',
      marginLeft:'auto',
      marginRight:'auto'
    },
  astronautLogo:{
      position:'absolute',
    borderRadius:'50%',
    width:'100px',
    height:'74px',
    margin: '20px 0px 0px 21px'
  },
  appbar:{
      height:'74px',
      backgroundColor:'#4c5161'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton >
              <img src={astro} alt="astronaut" className={classes.astronautLogo}></img>
          </IconButton>
            <img src={spacex} className={classes.spacexLogo}/> 
            <Link to="/">
            <Button variant="outlined" color="secondary">Launches</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}