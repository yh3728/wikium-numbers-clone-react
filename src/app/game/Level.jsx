import "./game.css"
import ScoreBar from "./UI/ScoreBar";
import AnswerButton from "./UI/AnswerButton";
import { getFieldSizeFromLvl, createGameField, findCorrect } from "@/game/field";
import {clamp} from "../../game/utils"
import { MAX_BONUS, MAX_LEVEL, GameState } from "@/config/game-config";

const Level = ({setGameInfo, gameInfo}) => {

    const size = getFieldSizeFromLvl(gameInfo.currentLvlNumber);
    const field = createGameField(size);
    const correct = findCorrect(field);

    const currentGridTemplateColumns = `repeat(${size.rows}, 1fr)`;

    function correctAnsHandler()
    {
        const newLvl = clamp(gameInfo.currentLvlNumber + 1, 1, MAX_LEVEL);
        const newScore = gameInfo.score += 40 * gameInfo.bonusX;
        const newBonusX = clamp(gameInfo.bonusX + 1, 1, MAX_BONUS);
        const newRightAnswers = gameInfo.rightAnswers + 1;
        const newAnswersCount = gameInfo.answersCount + 1;

        if (gameInfo.currentLvlNumber + 1 > MAX_LEVEL){
            const currentTry = {
                score: newScore,
                rightAnswers: newRightAnswers,
                answersCount: newAnswersCount
            }
            setGameInfo((prev) => ({
                ...prev,
                 state: GameState.CURRENT_RESULT,
                 tries: [...prev.tries, currentTry],
                 currentTry: currentTry
                }
            ));
            return;
        }
        
        setGameInfo((prev) => ({
            ...prev,
            currentLvlNumber: newLvl,
            bonusX: newBonusX,
            score: newScore,
            rightAnswers: newRightAnswers,
            answersCount: newAnswersCount
        }))
    }

    function incorrectAnsHandler()
    {
        const newLvl = clamp(gameInfo.currentLvlNumber - 1, 1, MAX_LEVEL);
        setGameInfo((prev) => ({
            ...prev,
            currentLvlNumber: newLvl,
            bonusX: 1,
            answersCount: gameInfo.answersCount + 1
        }))
    }

    return(
        <div className="level">
            <div className="score-bar-container">
                <ScoreBar currentLvlNumber={gameInfo.currentLvlNumber} score={gameInfo.score} bonusX={gameInfo.bonusX}></ScoreBar>
            </div>
            <div className="task-box">
                <p>Найдите указанное число</p>
                <p>{ correct }</p>
            </div>
            <div className="buttons-container" style={{gridTemplateColumns: currentGridTemplateColumns}}>
                {
                    field.map(item => (
                        <AnswerButton key={item.number} number={item.number} color={item.color} handler={item.correct? correctAnsHandler:incorrectAnsHandler}></AnswerButton>
                    ))
                }
            </div>
        </div>
    )
}

export default Level;