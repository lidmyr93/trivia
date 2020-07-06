import {
  GAME_ADD_PLAYER,
  GAME_REMOVE_PLAYER,
  GAME_SET_CATEGORY,
  GAME_SET_DIFFICULTY,
  GAME_SET_TYPE,
  FETCH_CHECK_QUESTIONS_PENDING,
  FETCH_CHECK_QUESTIONS_SUCCESS,
  FETCH_CHECK_QUESTIONS_ERROR,
  GAME_SET_STARTED,
  GAME_SET_ENDED,
  FETCH_SESSIONTOKEN_PENDING,
  FETCH_SESSIONTOKEN_SUCCESS,
  FETCH_SESSIONTOKEN_ERROR,
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
        type: action.payload,
      };
    case FETCH_CHECK_QUESTIONS_PENDING:
      return {
        ...state,
        questionsLimit: 0,
      };
    case FETCH_CHECK_QUESTIONS_SUCCESS:
      return {
        ...state,
        questionsLimit: action.payload,
      };
    case FETCH_CHECK_QUESTIONS_ERROR:
      return {
        ...state,
        questionsLimit: action.payload,
      };
    case GAME_SET_STARTED:
      return {
        ...state,
        game: true,
      };
    case GAME_SET_ENDED:
      return {
        ...state,
        game: false,
      };

    case FETCH_SESSIONTOKEN_PENDING:
      return {
        ...state,
        token: "pending",
      };

      case FETCH_SESSIONTOKEN_SUCCESS:
        return {
          ...state,
          token : action.payload
        };

        case FETCH_SESSIONTOKEN_ERROR:
          return {
            ...state,
            token: {error: action.payload, }
          }
    default:
      return state;
  }
}
