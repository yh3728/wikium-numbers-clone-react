import AnswerButton from "@/app/game/UI/AnswerButton";

const ButtonsArea = ({onAnswer, level}) => {
    const currentGridTemplateColumns = `repeat(${level.size.rows}, 1fr)`;
    return(
        <>
            <div className="task-box">
                <p>Найдите указанное число</p>
                <p>{level.correctNum}</p>
            </div>
            <div className="buttons-container" style={{gridTemplateColumns: currentGridTemplateColumns}}>
                {
                    level.field.map(item => (
                        <AnswerButton key={item.number} number={item.number} color={item.color}
                                      handler={onAnswer} animation={item.animation}> </AnswerButton>
                    ))
                }
            </div>
        </>
    )
}

export default ButtonsArea;