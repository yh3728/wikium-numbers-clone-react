import { GameState } from "@/config/game-config";
import ContinueButton from "./UI/ContinueButton"
import ResultsHeader from "./UI/ResultsHeader";
import GameTry from "./GameTry"
import "./game.css"

const AllResults = ({ info, updateState }) => {
    const {tries} = info;
    tries.sort((a, b) => b.score - a.score);
    return (
        <>
            <ResultsHeader></ResultsHeader>
            <div className="result-text-container">
                <div>
                    {
                        tries.map((gameTry, i) => (
                            <GameTry key={i} gameTry={gameTry} />
                        ))
                    }
                </div>
                <ContinueButton text="Заново" onClick={ () => {updateState(GameState.MENU)}}></ContinueButton>
            </div>
        </>
    )
}

export default AllResults;