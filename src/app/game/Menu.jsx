import { GameState } from "@/config/game-config";
import ContinueButton from "./UI/ContinueButton"
import "./game.css"

const Menu = ({setGameInfo}) => {
    return(
        <div className="menu">
            <div className="menu-header">
                <h3 className="menu-title">Найди число</h3>
                <p className="menu-title">Тренажер на внимательность</p>
            </div>
            <div className="menu-text-container">
                <ContinueButton onClick={ () => {setGameInfo((prev) => ({...prev, state: GameState.TUTORIAL}))}} text="Далее"></ContinueButton>
            </div>
        </div>
    )
}

export default Menu;