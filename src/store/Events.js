import { GameStore } from './GameStore';

// ACTION TYPES
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const RESET_SCORE = 'RESET_SCORE';
export const GAME_START = 'GAME_START';
export const GAME_END = 'GAME_END';

// HANDLERS
export const GameEvents = [
  {
    key: INCREASE_SCORE,
    handler: () => {
      console.log(INCREASE_SCORE, 'hello world!');
      GameStore.increaseScore(1);
    },
  },
];
