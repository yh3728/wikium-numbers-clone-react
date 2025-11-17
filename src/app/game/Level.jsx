import "./game.css"
import ScoreBar from "./UI/ScoreBar";
import AnswerButton from "./UI/AnswerButton";
import {GameState, tutorialLevel} from "@/config/game-config";
import ButtonsArea from "@/app/game/UI/ButtonsArea";

const Level = ({ onAnswer, info, level }) => {
    return (
        <div className="level">
            <div className="score-bar-container">
                <ScoreBar currentLvlNumber={info.currentLvlNumber} score={info.score}
                          bonusX={info.bonusX}></ScoreBar>
            </div>
            <ButtonsArea onAnswer={onAnswer} level={level}></ButtonsArea>
        </div>
    )
}

export default Level;