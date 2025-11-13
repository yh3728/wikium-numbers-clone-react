
import "../game.css"
import ScoreBarItem from "./ScoreBarItem";

const ScoreBar = ({currentLvlNumber, score, bonusX}) => {
    return (
    <div className="score-bar-container">
        <div className="score-bar">
            <ScoreBarItem name="уровень" value={currentLvlNumber}></ScoreBarItem>
            <ScoreBarItem name="очки" value={score}></ScoreBarItem>
            <ScoreBarItem name="бонус" value={bonusX}></ScoreBarItem>
        </div>
    </div>
    )
}

export default ScoreBar;
