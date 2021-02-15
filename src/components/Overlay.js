import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { observer } from 'mobx-react';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(3px)',
    zIndex: 1000,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  title: {
    fontFamily: 'monospace',
    fontSize: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

const Overlay = observer(({ store }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Game Over</h1>

      <h2>Score: {store.currentScore}</h2>

      <Button
        onClick={() => {
          store.hideOverlay();
          store.resetScore();
        }}
        variant="contained"
        color="primary"
      >
        Play Again
      </Button>
    </div>
  );
});

export default Overlay;
