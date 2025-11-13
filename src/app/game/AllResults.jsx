import { GameState } from "@/config/game-config";
import ContinueButton from "./UI/ContinueButton"
import GameTry from "./GameTry"
import "./game.css"

const AllResults = ({ setGameInfo, tries }) => {
    return (
        <>
            <div className="result-header">
                <h3 className="result-title">Ваши результаты</h3>
            </div>  
            <div className="result-text-container">
                {/* {
                    tries.map((item) => (
                        <GameTry currentTry={item}></GameTry>
                    ))
                } */}
                <ContinueButton text="Заново" onClick={ () => {setGameInfo((prev) => ({...prev, bonusX: 1, score: 0, currentLvlNumber: 1, state: GameState.MENU}))}}></ContinueButton>
            </div>
        </>
    )
}

export default AllResults;