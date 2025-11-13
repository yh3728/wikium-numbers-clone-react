import { GameState } from "@/config/game-config";
import ContinueButton from "./UI/ContinueButton"
import GameTry from "./GameTry"
import "./game.css"


const CurrentResult = ({ setGameInfo, currentTry }) => {
    return (
        <>
          <div className="result-header">
            <h3 className="result-title">Ваши результаты</h3>
          </div>  
          <div className="result-text-container">
            <GameTry currentTry={currentTry}></GameTry>
            <ContinueButton text="Далее" onClick={ () => {setGameInfo((prev) => ({...prev, state: GameState.ALL_RESULTS}))}}></ContinueButton>
          </div>
        </>
    )
}

export default CurrentResult;