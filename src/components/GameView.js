import React, { useState } from 'react';
import Phaser from 'phaser';
import { MainScene } from './GameScene';
import { IonPhaser } from '@ion-phaser/react';
import { observer } from 'mobx-react';

const GameView = observer(function GameView() {
  const [initialize] = useState(true);
  const [game] = useState({
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
  });

  return <IonPhaser game={game} initialize={initialize} />;
});

export default GameView;
