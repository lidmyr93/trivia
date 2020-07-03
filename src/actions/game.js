export const GAME_ADD_PLAYER = "GAME_ADD_PLAYER";
export const GAME_REMOVE_PLAYER = "GAME_REMOVE_PLAYER";
export const GAME_SET_CATEGORY = "GAME_SET_CATEGORY";

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
        payload: category
    }
}

export function addPlayer(name) {
  return (dispatch, getState) => {
    const { game } = getState();

    //Feels weird to do this, TODO: check why i need to do this
    if (game.players) {
      return dispatch(gameAddPlayer([...game.players, name]));
    }
    console.log("once");
    return dispatch(gameAddPlayer([name]));
  };
}

export function removePlayer() {
  return (dispatch, getState) => {
    const { game } = getState();
    
  };
}
