import Phaser from 'phaser';
import { GameEvents, Actions } from '../store/Events';

const gameOptions = {
  // bird gravity, will make bird fall if you don't flap
  birdGravity: 800,

  // horizontal bird speed
  birdSpeed: 125,

  // flap thrust
  birdFlapPower: 300,

  // minimum pipe height, in pixels. Affects hole position
  minPipeHeight: 50,

  // distance range from next pipe, in pixels
  pipeDistance: [220, 280],

  // hole range between pipes, in pixels
  pipeHole: [120, 150],

  // local storage object name
  localStorageName: 'bestFlappyScore',

  // default device sizes
  gameWidth: 320,
  gameHeight: 480,
};

export class MainScene extends Phaser.Scene {
  constructor(props) {
    super('PlayGame');
  }

  preload() {
    this.load.image('bird', 'images/neil.png');
    this.load.image('pipe', 'images/pipe2.png');
    this.load.image('background', '/images/background.png');
  }

  create() {
    //  Add event listeners for every event described in GameEvents, the 'handler' function. The 'this' argument is the context.
    GameEvents.map((event) => this.events.on(event.key, event.handler, this));

    // add the background
    var bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    // Place initial set of pipes
    this.pipeGroup = this.physics.add.group();
    this.pipePool = [];
    for (let i = 0; i < 4; i++) {
      this.pipePool.push(this.pipeGroup.create(0, 0, 'pipe'));
      this.pipePool.push(this.pipeGroup.create(0, 0, 'pipe'));
      this.placePipes(false);
    }

    // Position bird in the screen
    this.bird = this.physics.add.sprite(80, gameOptions.gameHeight / 2, 'bird');

    // Starts the game only after the first click
    this.input.once(
      'pointerdown',
      () => {
        this.pipeGroup.setVelocityX(-gameOptions.birdSpeed);
        this.bird.body.gravity.y = gameOptions.birdGravity;
        this.input.on('pointerdown', this.flap, this);

        this.events.emit(Actions.GAME_START);
      },
      this
    );

    // In-game scoreboard
    this.score = 0;
    this.topScore =
      localStorage.getItem(gameOptions.localStorageName) == null
        ? 0
        : localStorage.getItem(gameOptions.localStorageName);
    this.scoreText = this.add.text(10, 10, '');
    this.updateScore(this.score);
  }

  updateScore(inc) {
    this.score += inc;
    this.scoreText.text = 'Score: ' + this.score + '\nBest: ' + this.topScore;
  }

  placePipes(addScore) {
    let rightmost = this.getRightmostPipe();
    let pipeHoleHeight = Phaser.Math.Between(
      gameOptions.pipeHole[0],
      gameOptions.pipeHole[1]
    );
    let pipeHolePosition = Phaser.Math.Between(
      gameOptions.minPipeHeight + pipeHoleHeight / 2,
      gameOptions.gameHeight - gameOptions.minPipeHeight - pipeHoleHeight / 2
    );
    this.pipePool[0].x =
      rightmost +
      this.pipePool[0].getBounds().width +
      Phaser.Math.Between(
        gameOptions.pipeDistance[0],
        gameOptions.pipeDistance[1]
      );
    this.pipePool[0].y = pipeHolePosition - pipeHoleHeight / 2;
    this.pipePool[0].setOrigin(0, 1);
    this.pipePool[1].x = this.pipePool[0].x;
    this.pipePool[1].y = pipeHolePosition + pipeHoleHeight / 2;
    this.pipePool[1].setOrigin(0, 0);
    this.pipePool = [];

    if (addScore) {
      this.updateScore(1);

      //  We'll use the Scenes own EventEmitter to dispatch our event
      this.events.emit(Actions.INCREASE_SCORE);
    }
  }

  flap() {
    this.bird.body.velocity.y = -gameOptions.birdFlapPower;
  }

  getRightmostPipe() {
    let rightmostPipe = 0;
    this.pipeGroup.getChildren().forEach(function (pipe) {
      rightmostPipe = Math.max(rightmostPipe, pipe.x);
    });
    return rightmostPipe;
  }

  update() {
    // If game is paused, do nothing here

    // Add collision to pipes
    this.physics.world.collide(
      this.bird,
      this.pipeGroup,
      function () {
        this.die();
      },
      null,
      this
    );

    // Kills bird if out of bounds
    if (this.bird.y > gameOptions.gameHeight || this.bird.y < 0) {
      this.die();
    }

    // If pipes are out of bounds (left of the screen), create new ones (on the right)
    this.pipeGroup.getChildren().forEach(function (pipe) {
      if (pipe.getBounds().right < 0) {
        this.pipePool.push(pipe);
        if (this.pipePool.length === 2) {
          this.placePipes(true);
        }
      }
    }, this);
  }

  die() {
    localStorage.setItem(
      gameOptions.localStorageName,
      Math.max(this.score, this.topScore)
    );
    this.scene.restart('PlayGame');

    // Stop the game when dead
    this.events.emit(Actions.GAME_END);

    // Remove every active event listener
    GameEvents.map((event) => this.events.removeListener(event.key));
  }
}
