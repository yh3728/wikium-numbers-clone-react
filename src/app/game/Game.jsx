'use client'
import { initGameInfo } from "@/game/game-info";
import { GameState } from "@/config/game-config";
import "./game.css"
import Menu from "./Menu";
import Tutorial from './Tutorial'
import Level from "./Level";
import { useState } from "react";
import CurrentResult from "./CurrentResult";
import AllResults from "./AllResults";

const Game = () => {
    const [gameInfo, setGameInfo] = useState(initGameInfo);

    const stateToComponent = () => {
        switch (gameInfo.state) {
            case GameState.MENU:
                
                return <Menu setGameInfo={setGameInfo}></Menu>
            case GameState.TUTORIAL:
                return <Tutorial setGameInfo={setGameInfo}></Tutorial>
            case GameState.PLAYING:
                return <Level setGameInfo={setGameInfo} gameInfo={gameInfo}></Level>
            case GameState.CURRENT_RESULT:
                return <CurrentResult setGameInfo={setGameInfo} currentTry={gameInfo.currentTry}></CurrentResult>
            case GameState.ALL_RESULTS:
                console.log(gameInfo)
                return <AllResults setGameInfo={setGameInfo} tries={gameInfo.tries}></AllResults>
            default:
                return <p>oh no it's an error</p>
        }
    }

    return(
    <div className="game-container">
        {
            stateToComponent()
        }
    </div>
    )
}

export default Game;