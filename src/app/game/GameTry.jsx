
const GameTry = ({currentTry}) => {
    return (
        <div className="result-text-item">
                <p>Результат <strong>{currentTry.score}</strong></p>
                <p>Верных ответов <strong>{currentTry.rightAnswers} из {currentTry.answersCount}</strong></p>
        </div>
    )
}

export default GameTry;