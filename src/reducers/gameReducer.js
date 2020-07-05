import {
  GAME_ADD_PLAYER,
  GAME_REMOVE_PLAYER,
  GAME_SET_CATEGORY,
  GAME_SET_DIFFICULTY,
  GAME_SET_TYPE
} from "../actions/game";
const initState = {
  players: [],
  category: null,
};
export default function gameReducer(state = initState, action) {
  switch (action.type) {
    case GAME_ADD_PLAYER:
      return {
        ...state,
        players: action.payload,
      };
    case GAME_REMOVE_PLAYER:
      return {
        ...state,
        players: action.payload,
      };
    case GAME_SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case GAME_SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
      case GAME_SET_TYPE:
      return {
          ...state,
          type: action.payload
      }
    default:
      return state;
  }
}
