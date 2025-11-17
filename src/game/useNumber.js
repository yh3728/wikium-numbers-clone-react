import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {initGameInfo} from "./game-info";
import {createGameField, getFieldSizeFromLvl} from "./field";
import {clamp} from "./utils";
import {GameState, MAX_BONUS, MAX_LEVEL} from "@/config/game-config";

export default function useNumber() {

    const [info, updateInfo] = useState(initGameInfo);

    const {currentLvlNumber} = info;

    const level = useMemo(() => {
        const size = getFieldSizeFromLvl(currentLvlNumber);
        const {field, correctNum} = createGameField(currentLvlNumber);

        return {
            field,
            correctNum,
            size
        }
    }, [currentLvlNumber]);

    const data = useMemo(() => ({
        info,
        level
    }), []);

    data.info = info;
    data.level = level;

    const onRightAnswer = useCallback(() => {
        const copy = {...data.info};
        copy.score += 40 * data.info.bonusX;
        copy.bonusX = clamp(data.info.bonusX + 1, 1, MAX_BONUS);
        copy.rightAnswers++;
        copy.answersCount++;

        if (data.info.currentLvlNumber + 1 > MAX_LEVEL) {
            const now = new Date()
            copy.state = GameState.CURRENT_RESULT;
            copy.currentTry = {date: now.toLocaleDateString('ru-RU'), score: copy.score, rightAnswers: copy.rightAnswers, answersCount: copy.answersCount};
            copy.tries.push(copy.currentTry);
        } else copy.currentLvlNumber++;

        updateInfo(copy);

    }, []);

    const onWrongAnswer = useCallback(() => {
        // console.log('incorrect');
        const copy = {...data.info};
        copy.currentLvlNumber = clamp(copy.currentLvlNumber - 1, 1, MAX_LEVEL);
        copy.bonusX = 1;
        copy.answersCount++;
        copy.state = GameState.PLAYING;
        updateInfo(copy);
    }, []);


    const onAnswer = useCallback((number) => {
        const {level} = data;
        const isRight = number === level.correctNum;
        isRight ? onRightAnswer() : onWrongAnswer();

    }, [level]);


    const updateState = (state) => {
        if (state === GameState.MENU) {
            const copy = {...initGameInfo};
            copy.tries = data.info.tries;
            copy.state = GameState.MENU;
            updateInfo(copy);
        }
        updateInfo(prev => ({ ...prev, state: state }));
    };


    return {
        level,
        info,
        updateState,
        onAnswer
    }
}