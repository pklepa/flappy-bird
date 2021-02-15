import { action, makeObservable, observable } from 'mobx';

class GameStoreImplem {
  constructor() {
    makeObservable(this, {
      currentScore: observable,
      isCurrentlyPlaying: observable,
      showOverlay: observable,
      increaseScore: action,
      resetScore: action,
      startGame: action,
      endGame: action,
      hideOverlay: action,
    });
  }

  currentScore = 0;
  isCurrentlyPlaying = false;
  showOverlay = true;

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
    this.showOverlay = true;
  };

  hideOverlay = () => {
    this.showOverlay = false;
  };
}

export const GameStore = new GameStoreImplem();
