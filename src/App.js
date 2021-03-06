import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react';

import { GameStore } from './store/GameStore';

import GameWrapper from './components/GameWrapper';
import GameView from './components/GameView';
import Header from './components/Header';
import Tooltip from './components/Tooltip';
import Overlay from './components/Overlay';

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

const App = observer(() => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <div className={classes.root}>
        <Header />

        <GameWrapper>
          <GameView />

          {GameStore.showOverlay && <Overlay store={GameStore} />}
          {!GameStore.isCurrentlyPlaying && <Tooltip />}
        </GameWrapper>
      </div>
    </>
  );
});

export default App;
