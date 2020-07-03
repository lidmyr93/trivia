

import {combineReducers} from "redux";
import categoriesReducer from "./categoryReducer";
import questionReducer from "./questionReducer";
import gameReducer from "./gameReducer"

export const initialState = {
  pending: false,
  categories: [],
  error: null,
  questions : [],
  game: {}
}



export const rootReducer = combineReducers({categories : categoriesReducer, questions: questionReducer, game : gameReducer})