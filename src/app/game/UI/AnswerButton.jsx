
const AnswerButton = ({number, color, animation, handler})=> {
    return (
        <button className={`${animation} answer-btn`} onClick={handler ? () => handler(number) : undefined} style={{backgroundColor: color}}>
            <p>{number}</p>
        </button>
    )
}

export default AnswerButton;