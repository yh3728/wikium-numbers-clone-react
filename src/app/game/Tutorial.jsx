import {GameState, tutorialLevel} from "@/config/game-config";
import "./game.css"
import "../../../public/finger.svg"
import ButtonsArea from "@/app/game/UI/ButtonsArea";

const Tutorial = ({ updateState}) => {

    const onClickHandle = () => {
        updateState(GameState.PLAYING);
    }

    return(
        <div className="tutorial" onClick={onClickHandle}>
            <img src="finger.svg" className="tutorial-finger"></img>
            <ButtonsArea level={tutorialLevel}></ButtonsArea>
            <p className="tutorial-text">Нажмите на экран, чтобы продолжить</p>
        </div>
    )
}

export default Tutorial;