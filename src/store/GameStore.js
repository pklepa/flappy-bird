import { action, makeObservable, observable } from 'mobx';

class GameStoreImplem {
  constructor() {
    makeObservable(this, {
      currentScore: observable,
      increaseScore: action,
    });
  }

  currentScore = 0;

  increaseScore = () => {
    this.currentScore += 1;
  };
}

export const GameStore = new GameStoreImplem();
