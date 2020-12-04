import Game from "./../../game";
import React from "react";
import Normal from "../normal";
import ReactDOM from "react-dom";

export default class TestComponent extends React.Component<{ scene: Phaser.Scene }> {

    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <>
                <p> if you click the button,a scene without react is going to create</p>
                <button onClick={() => { this.createNormalScene(); }}> CLICK ME </button>
            </>
        );
    }
    createNormalScene(): void {

        const { scene } = this.props;
        
        Game.PhaserGame.scene.remove(scene.scene.key);
        Game.PhaserGame.scene.add('normal', new Normal({ key: 'normal', active: true }));

        //if you want to remove this component

        let getElement = document.getElementById('root');
        if(getElement !== null) { ReactDOM.unmountComponentAtNode(getElement);}

    
       


    }
}