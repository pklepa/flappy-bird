import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    width: '320px',
    height: '480px',
    margin: '30px',
  },
});

function GameWrapper({ children }) {
  const classes = useStyles();

  return (
    <div id="game-wrapper" className={classes.wrapper}>
      {children}
    </div>
  );
}

export default GameWrapper;
