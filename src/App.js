import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import GameWrapper from './components/GameWrapper';
import GameView from './components/GameView';
import ScoreBoard from './components/ScoreBoard';
import { GameStore } from './store/GameStore';
import Header from './components/Header';

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
        <Header />

        <ScoreBoard store={GameStore} />

        <GameWrapper>
          <GameView />
        </GameWrapper>
      </div>
    </>
  );
}

export default App;
