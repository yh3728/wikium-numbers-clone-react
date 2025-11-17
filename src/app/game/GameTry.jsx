
const GameTry = ({gameTry}) => {
    return (
        <div className="result-text-item">
            <p className="result-text-item-date">{gameTry.date}</p>
            <p>{gameTry.score} очков</p>
        </div>
    )
}

export default GameTry;