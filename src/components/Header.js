import React from 'react';
import { AppBar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  appbar: {
    background: 'none',
    alignItems: 'center',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
    fontSize: '26px',
    fontFamily: "'Josefin Sans', sans-serif",
    letterSpacing: '1px',
  },

  logo: {
    width: '150px',
    height: '50px',
    margin: '0 10px',
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="absolute">
      <h1 className={classes.title}>
        Flappy
        <img
          className={classes.logo}
          src={process.env.PUBLIC_URL + '/images/adeptly.png'}
          alt="Adeptly"
        />
      </h1>
    </AppBar>
  );
}

export default Header;
