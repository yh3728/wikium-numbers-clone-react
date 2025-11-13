import { FIELD_SIZE } from "../config/game-config";

const allColors = ['lightCoral', 'powderBlue','peru', 'pink', 'lightGreen'];

// quantity количество кнопок
export function createGameField(size) {
    const field = []
    let numbers = new Set();
    const colors = [];
    const quantity = size.cols * size.rows;

    while (numbers.size < quantity) {
        const num =  Math.floor(Math.random() * (999 - 1) + 1);
        numbers.add(num);
    }

    numbers = [...numbers];

    while (colors.length < quantity) {
        const num =  Math.floor(Math.random() * allColors.length);
        colors.push(num);
    }

    for (let i = 0; i < quantity; i++) {
        field.push(createButton(numbers[i], allColors[colors[i]]));
    }

    const correctNum =  Math.floor( Math.random() * quantity);
    field[correctNum].correct = true;
    return field;
}

function createButton(number, color) {
    return{
        number: number,
        color: color,
        correct: false,
    }
}

export function findCorrect(field){
    for (let i = 0; i < field.length; i++) {
        if (field[i].correct){
            return field[i].number;
        }
    }
    return null;
}

export function getFieldSizeFromLvl(LvlNumber){
    if (LvlNumber <= 3){
        return FIELD_SIZE.small;
    }
    else if ((LvlNumber > 3) & (LvlNumber <= 6)){
        return FIELD_SIZE.medium;
    }
    else if ((LvlNumber > 6) & (LvlNumber < 9)){
        return FIELD_SIZE.big;
    }
    else {
        return FIELD_SIZE.biggest;
    }
}
