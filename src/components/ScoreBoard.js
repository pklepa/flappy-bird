import React from 'react';
import { observer } from 'mobx-react';
import { GameEvents } from '../store/Events';

const ScoreBoard = observer(({ store }) => {
  return (
    <div>
      <h1>Current Score: {store.currentScore}</h1>

      <h2>{store.isCurrentlyPlaying ? 'In game' : 'Paused'}</h2>

      <button onClick={GameEvents[2].handler}>Play Again</button>
    </div>
  );
});

export default ScoreBoard;
