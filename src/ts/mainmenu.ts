import * as Font from "./font";

export class MainMenu {

    private game: Phaser.Game;
    private pressToPlayText: Phaser.Text;
    private pressToReplayText: Phaser.Text;

    public constructor(game: Phaser.Game) {
        this.game = game;
    }

    preload() {
        this.game.load.image("logo", "/img/logo.png");
    }

    create() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        logo.anchor.setTo(0.5, 0.5);

        // Menue-Information anzeigen
        this.pressToPlayText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "PRESS <SPACE> TO START GAME", Font.H1);
        this.pressToPlayText.anchor.set(0.5);
       /* this.pressToReplayText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 50, "PRESS <F5> TO RESTART GAME", Font.H2);
        this.pressToReplayText.anchor.set(0.5);*/

        // Zurueck zum Hauptmenue
        //  this.addKeyCallback(Phaser.Keyboard.F5, () => this.game.state.start("mainMenue"), null);
        // Das Spiel über den World.Controller starten
        this.addKeyCallback(Phaser.Keyboard.SPACEBAR, () => this.game.state.start("worldController"), null);
    }

    update() {

    }

    /**
     * Tastatur-Listener hinzufuegen
     */
    addKeyCallback(key: number, fn: Function, args: any[]) {
        this.game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
    }
}