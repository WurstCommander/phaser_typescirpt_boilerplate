//import { GameOver } from "./menue/gameover";
//import { HighScore } from "./menue/highscore";
//import { MainMenu } from "./menue/mainmenu";
//import { WorldController } from "./world/controller";

class GameApp {
    
    game: Phaser.Game;
    cursors: Phaser.CursorKeys;

    constructor() {
        this.game = new Phaser.Game(1280, 960, Phaser.AUTO, "content", { preload: this.preload, create: this.create });
    }


    preload() {
        this.game.load.image("logo", "img/logo.png");
    }

    create() {
        let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;        

        logo.anchor.setTo(0.5, 0.5);
    }
}

this.game = new GameApp();