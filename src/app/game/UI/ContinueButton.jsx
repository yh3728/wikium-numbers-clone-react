
const ContinueButton = ({onClick, text}) => {
    return (
        <button className="continue-game-btn" onClick={onClick}>{text}</button>
    )
}

export default ContinueButton;