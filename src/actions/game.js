import { Player } from "../constructors/player";

export const GAME_ADD_PLAYER = "GAME_ADD_PLAYER";
export const GAME_REMOVE_PLAYER = "GAME_REMOVE_PLAYER";
export const GAME_SET_CATEGORY = "GAME_SET_CATEGORY";
export const GAME_SET_DIFFICULTY = "GAME_SET_DIFFICULTY";
export const GAME_SET_TYPE = "GAME_SET_TYPE"

export function gameAddPlayer(players) {
  return {
    type: GAME_ADD_PLAYER,
    payload: players,
  };
}

export function gameRemovePlayer(players) {
  console.log(players);
  return {
    type: GAME_REMOVE_PLAYER,
    payload: players,
  };
}
export function gameSetCategory(category) {
    return {
        type: GAME_SET_CATEGORY,
        payload: category
    }
}
export function gameSetDifficulty(difficulty){
  return {
    type: GAME_SET_DIFFICULTY,
    payload: difficulty
  }
}
export function gameSetType(type){
  return{
    type: GAME_SET_TYPE,
    payload: type
  }
}
export function addPlayer(name) {
  return (dispatch, getState) => {
    const { game } = getState();
    
    if (game.players.length >= 1) {
      return dispatch(gameAddPlayer([...game.players, new Player(name, game.players.length)]));
    }
    return dispatch(gameAddPlayer([new Player(name, game.players.length)]));
  };
}

export function removePlayer(name) {
  return (dispatch, getState) => {
    const { game } = getState();
    let tempArray = game.players;
    tempArray = tempArray.filter(player => player.name !== name)
    
    return dispatch(gameRemovePlayer(tempArray))
  };
}
