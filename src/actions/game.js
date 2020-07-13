import { Player } from "../constructors/player";

export const GAME_ADD_PLAYER = "GAME_ADD_PLAYER";
export const GAME_REMOVE_PLAYER = "GAME_REMOVE_PLAYER";
export const GAME_SET_CATEGORY = "GAME_SET_CATEGORY";
export const GAME_SET_DIFFICULTY = "GAME_SET_DIFFICULTY";
export const GAME_SET_TYPE = "GAME_SET_TYPE";
export const GAME_SET_CATEGORYLIMIT = "GAME_SET_CATEGORYLIMIT";
export const FETCH_CHECK_QUESTIONS_PENDING = "FETCH_CHECK_QUESTIONS_PENDING";
export const FETCH_CHECK_QUESTIONS_SUCCESS = "FETCH_CHECK_QUESTIONS_SUCCESS";
export const FETCH_CHECK_QUESTIONS_ERROR = "FETCH_CHECK_QUESTIONS_ERROR";
export const GAME_SET_STARTED = "GAME_SET_STARTED";
export const GAME_SET_ENDED = "GAME_SET_ENDED";
export const FETCH_SESSIONTOKEN_PENDING = "FETCH_SESSIONTOKEN_PENDING";
export const FETCH_SESSIONTOKEN_SUCCESS = "FETCH_SESSIONTOKEN_SUCCESS";
export const FETCH_SESSIONTOKEN_ERROR = "FETCH_SESSIONTOKEN_ERROR";

export function gameAddPlayer(players) {
  return {
    type: GAME_ADD_PLAYER,
    payload: players,
  };
}

export function gameRemovePlayer(players) {
  return {
    type: GAME_REMOVE_PLAYER,
    payload: players,
  };
}
export function gameSetCategory(category) {
  return {
    type: GAME_SET_CATEGORY,
    payload: category,
  };
}
export function gameSetCategoryLimit(limit) {
  return {
    type: GAME_SET_CATEGORYLIMIT,
    payload: limit,
  };
}
export function gameSetDifficulty(difficulty) {
  return {
    type: GAME_SET_DIFFICULTY,
    payload: difficulty,
  };
}
export function gameSetType(type) {
  return {
    type: GAME_SET_TYPE,
    payload: type,
  };
}
export function addPlayer(name) {
  return (dispatch, getState) => {
    const { game } = getState();

    if (game.players.length >= 1) {
      return dispatch(
        gameAddPlayer([...game.players, new Player(name)])
      );
    }
    return dispatch(gameAddPlayer([new Player(name)]));
  };
}

export function removePlayer(name) {
  return (dispatch, getState) => {
    const { game } = getState();
    let tempArray = game.players;
    tempArray = tempArray.filter((player) => player.name !== name);

    return dispatch(gameRemovePlayer(tempArray));
  };
}

export function gameStartGame() {
  return { type: GAME_SET_STARTED, payload: true };
}
export function gameEndGame() {
  return { type: GAME_SET_ENDED, payload: false };
}

export function fetchCheckQuestionsPending() {
  return {
    type: FETCH_CHECK_QUESTIONS_PENDING,
  };
}
export function fetchCheckQuestionsSuccess(result) {
  return {
    type: FETCH_CHECK_QUESTIONS_SUCCESS,
    payload: result,
  };
}
export function fetchCheckQuestionsError(error) {
  return {
    type: FETCH_CHECK_QUESTIONS_ERROR,
    payload: error,
  };
}

export function fetchSessionTokenPending() {
  return {
    type: FETCH_SESSIONTOKEN_PENDING,
  };
}
export function fetchSessionTokenSuccess(token) {
  return {
    type: FETCH_SESSIONTOKEN_SUCCESS,
    payload: token,
  };
}
export function fetchSessionTokenError(error) {
  return { type: FETCH_SESSIONTOKEN_ERROR, payload: error };
}
