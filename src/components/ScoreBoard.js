import React from 'react';
import { observer } from 'mobx-react';

const ScoreBoard = observer(({ store }) => {
  return (
    <div>
      <h1>Current Score: {store.currentScore}</h1>

      <h2>{store.isCurrentlyPlaying ? 'In game' : 'Paused'}</h2>
    </div>
  );
});

export default ScoreBoard;
