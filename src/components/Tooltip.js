import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontFamily: 'monospace',
    fontSize: '18px',
    textAlign: 'center',
    color: 'whitesmoke',

    width: '100%',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    animation: '$scaleAndBounce 2s ease-in-out infinite',
  },

  '@keyframes scaleAndBounce': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(.8)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
});

function Tooltip() {
  const classes = useStyles();

  return <h1 className={classes.title}>Click to start</h1>;
}

export default Tooltip;
