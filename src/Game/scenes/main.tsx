import React from "react";
import ReactDOM from "react-dom";
import TestComponent from "./component/testcomponent";

export default class Main extends Phaser.Scene {
    constructor(config: {}) {
        super(config);
    }
    init() {

    }
    preload() {

    }
    create() {
        this.add.text(50,200,'this is a scene with react components,and with callComponent you can call your react component');
        this.callComponent();
    }
    callComponent() : void {
        ReactDOM.render(<TestComponent scene={this} />,document.getElementById('root'));
    }
}