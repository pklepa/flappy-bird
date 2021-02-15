import React from 'react';
import Phaser from 'phaser';
import { MainScene } from './GameScene';
import { IonPhaser } from '@ion-phaser/react';

import { INCREASE_SCORE } from '../store/Events';

class GameView extends React.Component {
  state = {
    initialize: true,
    game: {
      width: '100%',
      height: '100%',
      type: Phaser.AUTO,
      backgroundColor: 0x506cb5,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 320,
        height: 480,
      },
      pixelArt: true,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: 0,
          },
        },
      },
      scene: MainScene,
    },
  };

  render() {
    const { initialize, game } = this.state;

    return <IonPhaser game={game} initialize={initialize} />;
  }
}

export default GameView;

// Custom event that change value in Mobx store
// function addListeners(game) {
//   game.events.on(INCREASE_SCORE, (amount) => {
//     // props.gameStore.increaseScore(amount);
//     console.log('hello fron listener');
//   });
// }
