import { GameState } from "@/config/game-config";
import AnswerButton from "./UI/AnswerButton";
import "./game.css"
import "../../../public/finger.svg"

const Tutorial = ({setGameInfo}) => {

    const onClickHandle = () => {
        setGameInfo((prev) => ({...prev, state: GameState.PLAYING}));
    }

    const nums = [1, 2, 3, 4, 5, 6]
    const currentGridTemplateColumns = "repeat(3, 1fr)";

    return(
        <div className="tutorial" onClick={onClickHandle}>
            <div className="task-box">
                <p>Найдите указанное число</p>
                <p>4</p>
            </div>
            <img src="finger.svg" className="tutorial-finger"></img>
            <div className="buttons-container" style={{gridTemplateColumns: currentGridTemplateColumns}}>
                {
                    nums.map((num) => (
                        <AnswerButton key={num} number={num}></AnswerButton>
                    ))
                }
                <p className="tutorial-text">Нажмите на экран, чтобы продолжить</p>
            </div>
        </div>
    )
}

export default Tutorial;