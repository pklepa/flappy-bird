import React from 'react';
import { observer } from 'mobx-react';

const ScoreBoard = observer(({ store }) => {
  return (
    <div>
      <h1>Current Score: {store.currentScore}</h1>

      <button
        onClick={() => {
          store.increaseScore();
        }}
      >
        Increase!
      </button>
    </div>
  );
});

export default ScoreBoard;
