
import { MainMenu } from "./mainmenu";

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
}

this.game = new GameApp();