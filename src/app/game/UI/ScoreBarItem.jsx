import "../game.css"

const ScoreBarItem = ({name, value}) => {
    return(
        <div className="score-bar-item">
            <p>{name}</p>
            <p>{value}</p>
        </div>
    )
}

export default ScoreBarItem;