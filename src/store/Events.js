import { GameStore } from './GameStore';

// ACTION TYPES
export const Actions = {
  INCREASE_SCORE: 'INCREASE_SCORE',
  RESET_SCORE: 'RESET_SCORE',
  GAME_START: 'GAME_START',
  GAME_END: 'GAME_END',
};

// HANDLERS
export const GameEvents = [
  {
    key: Actions.INCREASE_SCORE,
    handler: () => {
      console.log(Actions.INCREASE_SCORE);
      GameStore.increaseScore(1);
    },
  },
  {
    key: Actions.RESET_SCORE,
    handler: () => {
      console.log(Actions.RESET_SCORE);
      GameStore.resetScore();
    },
  },
  {
    key: Actions.GAME_START,
    handler: () => {
      console.log(Actions.GAME_START);
      GameStore.startGame();
    },
  },
  {
    key: Actions.GAME_END,
    handler: () => {
      console.log(Actions.GAME_END);
      GameStore.endGame();
    },
  },
];
