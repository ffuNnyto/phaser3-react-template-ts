import 'phaser';
import Main from './scenes/main';

export default class Game {
    static PhaserGame : Phaser.Game;

    static createGame(): void {

        const phaserConfig: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            parent: "game",
            width: 1000,
            height: 600,
            scene: {
                init() { },
                preload() { },
                create() { },
                update() { }
            },
            title: "TESTGAME",
            version: "0.0.1",
            backgroundColor: "#000000"
        };

        this.PhaserGame = new Phaser.Game(phaserConfig);
        this.PhaserGame.scene.add('main',new Main({key:'main',active:true}));
    }
}