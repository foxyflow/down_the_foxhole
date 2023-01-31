import Phaser from 'phaser';

export default class Menu extends Phaser.Scene {

    upKey: any;

    constructor() {
        super('menu');
    }

    //data pram is object coming from Play scene.
    create(data: { score: any; }){
        // get score
        let score = data.score ?
            data.score : 0;
        // add background
        this.cameras.main.fadeIn(1000, 255, 0, 0);
        this.add.image(250, 170, 'background').setOrigin(0, 0);
        // add title
        let nameLabel = this.add.text(250, 80, 'Welcome to death', {font: '50px Lato'});
        nameLabel.setOrigin(0.5, 0.5);
        // display score
        let scoreText = 'score: ' + score;
        let scoreLabel = this.add.text(250, 150, scoreText, {font: '40px Geo'});
        scoreLabel.setOrigin(0.5, 0.5);
        // add start button
        let startText = 'press the up arrow key to start';
        let startLabel = this.add.text(250, 250, startText, {font: '25px Arial'});
        startLabel.setOrigin(0.5, 0.5);
        // store the up arrow key
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        //move menu label
        this.tweens.add({
            targets: nameLabel,
            angle: {from: -2, to: 2},
            yoyo: true,
            repeat: -1
        });

    } // end of create()

    update(){
        // check if up key is pressed
        if(this.upKey.isDown){
            // start the play scene
            this.scene.start('game'); //maybe change to Play
        }
    } // end of update()
} // end of Menu class