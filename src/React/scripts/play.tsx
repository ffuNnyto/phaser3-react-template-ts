import Game from "./../../Game/game";
import React from "react";

export default class Play extends React.Component {
    componentDidMount() { //when play.html is mount we call phaser to mount game
        Game.createGame();
    }
    render() {
        return(<></>);
    }
}