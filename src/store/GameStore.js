import { action, makeObservable, observable } from 'mobx';

class GameStoreImplem {
  constructor() {
    makeObservable(this, {
      currentScore: observable,
      isCurrentlyPlaying: observable,
      increaseScore: action,
      resetScore: action,
      startGame: action,
      endGame: action,
    });
  }

  currentScore = 0;
  isCurrentlyPlaying = false;

  increaseScore = () => {
    this.currentScore += 1;
  };

  resetScore = () => {
    this.currentScore = 0;
  };

  startGame = () => {
    this.isCurrentlyPlaying = true;
  };

  endGame = () => {
    this.isCurrentlyPlaying = false;
  };
}

export const GameStore = new GameStoreImplem();
