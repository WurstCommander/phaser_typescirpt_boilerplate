//import { GameOver } from "./menue/gameover";
//import { HighScore } from "./menue/highscore";
import { MainMenu } from "./mainmenu";
//import { WorldController } from "./world/controller";

class GameApp {
    game: Phaser.Game;
    // cursors: Phaser.CursorKeys;

    // Gamestates wie Startmenu etc
    mainMenue: MainMenu;

    constructor() {
        this.game = new Phaser.Game(1280, 960, Phaser.AUTO, "content", { });
        // Gamestates adden
        this.mainMenue = new MainMenu(this.game);
        this.game.state.add("mainMenue", this.mainMenue);
        this.game.state.start('mainMenue');

    }
/*

    preload() {
        this.game.load.image("logo", "img/logo.png");
    }

    create() {
        let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        logo.anchor.setTo(0.5, 0.5);


        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
    }*/
}

this.game = new GameApp();