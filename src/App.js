import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: '#202430',
    color: 'whitesmoke',

    paddingTop: '100px',
    minHeight: '100vh',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <div className={classes.root}>
        <h1>hello world</h1>
      </div>
    </>
  );
}

export default App;
