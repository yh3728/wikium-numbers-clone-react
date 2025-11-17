import { FIELD_SIZE } from "@/config/game-config";
import Game from "@/app/game/Game";

export const allColors = ['lightCoral', 'powderBlue', 'peru', 'pink', 'lightGreen'];
const animations = ['', 'spinning', 'scaling', 'opacity']

// quantity количество кнопок
export function createGameField(level,) {
    const size = getFieldSizeFromLvl(level);

    const field = []
    let numbers = new Set();
    const quantity = size.cols * size.rows;

    while (numbers.size < quantity) {
        const num =  Math.floor(Math.random() * (999 - 1) + 1);
        numbers.add(num);
    }

    numbers = [...numbers];

    for (let i = 0; i < quantity; i++) {
        const color =  Math.floor(Math.random() * allColors.length);
        const anim =  Math.floor(Math.random() * animations.length);

        field.push(createButton(numbers[i], allColors[color], animations[anim]));
    }

    const correctNum =  Math.floor( Math.random() * quantity);
    field[correctNum].correct = true;
    return {field, correctNum: field[correctNum].number};
}

export function createButton(number, color, animation) {
    return{
        number: number,
        color: color,
        animation: animation,
        correct: false,
    }
}

export function getFieldSizeFromLvl(LvlNumber){
    if (LvlNumber <= 3){
        return FIELD_SIZE.small;
    }
    else if ((LvlNumber > 3) && (LvlNumber <= 6)){
        return FIELD_SIZE.medium;
    }
    else if ((LvlNumber > 6) && (LvlNumber < 9)){
        return FIELD_SIZE.big;
    }
    else {
        return FIELD_SIZE.biggest;
    }
}
