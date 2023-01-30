import Phaser from 'phaser'
import Preloader from './scenes/Preloader'
import Menu from './scenes/Menu'
import Game from './scenes/Game'


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app', //maybe change to game
	width: 1200,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [Preloader, Menu, Game]
}

export default new Phaser.Game(config)