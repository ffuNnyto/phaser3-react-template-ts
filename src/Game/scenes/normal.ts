export default class Normal extends Phaser.Scene {
    constructor(config:{})
    {
        super(config);
    }
    init() {

    }
    preload()  {

    }
    create() {
        this.add.text(100,100,'this is a normal scene without react components');
    }
}