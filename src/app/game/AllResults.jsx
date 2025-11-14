import { GameState } from "@/config/game-config";
import ContinueButton from "./UI/ContinueButton"
import ResultsHeader from "./UI/ResultsHeader";
import GameTry from "./GameTry"
import "./game.css"

const AllResults = ({ setGameInfo, tries }) => {
    return (
        <>
            <ResultsHeader></ResultsHeader>
            <div className="result-text-container">
                <div>
                    
                </div>
                <ContinueButton text="Заново" onClick={ () => {setGameInfo((prev) => ({...prev, bonusX: 1, score: 0, currentLvlNumber: 1, state: GameState.MENU}))}}></ContinueButton>
            </div>
        </>
    )
}

export default AllResults;