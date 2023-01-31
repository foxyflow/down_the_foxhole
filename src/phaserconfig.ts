import Phaser from 'phaser'
import Preloader from './scenes/Preloader'
import Menu from './scenes/Menu'
import Game from './scenes/Game'


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'game', 
	width: 1200,
	height: 592,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		min: {
			width: 250,
			height: 170,},
		max: { 
			width: 1200,
			height: 592},
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [Preloader, Menu, Game]
}

export default new Phaser.Game(config)

//things to try:
//backgroundColor: '#33A5E7', //light blue