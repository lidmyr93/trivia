import { combineReducers } from "redux";
import categoriesReducer from "./categoryReducer";
import questionReducer from "./questionReducer";
import gameReducer from "./gameReducer";
import { Player } from "../constructors/player";



export const initialState = {
  pending: false,
  categories: [],
  error: null,
  questions: [],
  game: {
    players: [new Player("magnus"), new Player("malin")],
    questionsLimit : 0,
    category : null,
    game : false,
    winCondition: 5,
    token: null,
  },
};

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  questions: questionReducer,
  game: gameReducer,
});
