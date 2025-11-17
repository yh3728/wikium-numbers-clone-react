'use client'
import { stateToComponent} from "@/config/game-config";
import "./game.css"
import useNumber from "../../game/useNumber";

const Game = () => {
    const {
        level,
        info,
        updateState,
        onAnswer
    } =  useNumber();

    const Component = stateToComponent[info.state] ?? <p>oh no it's an error</p>;

    return (
        <div className="game-container">
            {
                <Component info={info} level={level} updateState={updateState} onAnswer={onAnswer} />
            }
        </div>
    )
}

export default Game;