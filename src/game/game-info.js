import { GameState } from "@/config/game-config";

export const initGameInfo = {
    currentLvlNumber: 1,
    bonusX: 1,
    score: 0,
    tries: [],
    currentTry: {},
    rightAnswers: 0,
    answersCount: 0,
    state: GameState.MENU,
}