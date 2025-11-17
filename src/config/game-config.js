import Menu from "@/app/game/Menu";
import Tutorial from "@/app/game/Tutorial";
import Level from "@/app/game/Level";
import CurrentResult from "@/app/game/CurrentResult";
import AllResults from "@/app/game/AllResults";
import {allColors, createButton, getFieldSizeFromLvl} from "@/game/field";

export const TIME_SECONDS = 60;
export const FIELD_SIZE = {
    small: {
        cols: 2,
        rows: 3
    },
    medium: {
        cols: 3,
        rows: 4
    },
    big: {
        cols: 4,
        rows: 4
    },
    biggest: {
        cols: 5,
        rows: 5
    }
}

export const MAX_BONUS = 5;
export const MAX_LEVEL = 9;

export const GameState = {
    MENU: 'menu',
    TUTORIAL: 'tutorial',
    PLAYING: 'playing',
    CURRENT_RESULT: 'currentResult',
    ALL_RESULTS: 'allResults'
};

export const stateToComponent = {
    [GameState.MENU]: Menu,
    [GameState.TUTORIAL]: Tutorial,
    [GameState.PLAYING]: Level,
    [GameState.CURRENT_RESULT]: CurrentResult,
    [GameState.ALL_RESULTS]: AllResults,
}

const tutField = []
for (let i = 1; i < 7; i++){
    tutField.push(createButton(i, allColors[Math.floor(Math.random() * allColors.length)]))
}

export const tutorialLevel = {
    field: tutField,
    correctNum: 4,
    size: getFieldSizeFromLvl(1)
}