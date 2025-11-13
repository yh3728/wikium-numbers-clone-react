
const AnswerButton = ({number, color, handler})=> {
    return (
        <button className="answer-btn" onClick={handler} style={{backgroundColor: color}}>{number}</button>
    )
}

export default AnswerButton;