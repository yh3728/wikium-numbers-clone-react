import { GameState } from "@/config/game-config";
import ContinueButton from "./UI/ContinueButton"
import "./game.css"
import ResultsHeader from "./UI/ResultsHeader";


const CurrentResult = ({ setGameInfo, currentTry }) => {
    return (
        <>
          <ResultsHeader></ResultsHeader>
          <div className="result-text-container">
            <table className="result-table">
              <tbody>
                <tr>
                  <th scope="row">Текущий результат</th>
                  <td>{currentTry.score}</td>
                </tr>
                <tr>
                  <th scope="row">Верных ответов</th>
                  <td>{currentTry.rightAnswers} из {currentTry.answersCount}</td>
                </tr>
                <tr>
                  <th scope="row">Точность ответов</th>
                  <td>{(currentTry.rightAnswers * 100) / currentTry.answersCount}</td>
                </tr>
              </tbody>
            </table>
            <ContinueButton text="Далее" onClick={ () => {setGameInfo((prev) => ({...prev, state: GameState.ALL_RESULTS}))}}></ContinueButton>
          </div>
        </>
    )
}

export default CurrentResult;