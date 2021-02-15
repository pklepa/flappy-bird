import { Scene } from 'phaser';

export class MainScene extends Scene {
  constructor() {
    super({
      key: 'MainScene',
    });
  }

  init() {
    this.cameras.main.setBackgroundColor('#24252A');
  }

  create() {
    //  Here is our event listener, the 'handler' function. The 'this' argument is the context.
    // this.events.on('increaseScore', () => console.log('increase!'), this);

    this.helloWorld = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      'Hello World',
      {
        font: '40px Arial',
        fill: '#ffffff',
      }
    );
    this.helloWorld.setOrigin(0.5);
    // this.counter = 0;
  }

  update() {
    this.helloWorld.angle += 1;
    // this.counter += 1;
  }
}
