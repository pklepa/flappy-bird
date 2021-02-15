import { action, makeObservable, observable } from 'mobx';

class GameStoreImplem {
  constructor() {
    makeObservable(this, {
      currentScore: observable,
      increaseScore: action,
      resetScore: action,
    });
  }

  currentScore = 0;

  increaseScore = () => {
    this.currentScore += 1;
  };

  resetScore = () => {
    this.currentScore = 0;
  };
}

export const GameStore = new GameStoreImplem();
